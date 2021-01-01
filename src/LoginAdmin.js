import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router';

class LoginAdmin extends Component{

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var username = data.get("username");
    var password = data.get("password");

    var successCb = ()=>{
      console.log("authenticated");
      // const { history } = this.props;
      this.props.history.replace('/admin/seminar');
    }
    var failCb = ()=>{
      console.log("Username atau password salah")
      // swal("Oops!", "Anda Tidak Terdafar!", "error");
    }

    this.props.fakeAuth.authenticateAdmin(successCb,failCb,username,password)


  }

  render(){
    const flexContainerDeadCenter = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height:"100vh"
    };
    
    return(
      <div style={flexContainerDeadCenter}>
        <Card>
          <Card.Body>
            <Card.Title style={{textAlign:"center"}}>Login Admin</Card.Title>
              <Form onSubmit={this.login}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" type="name" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withRouter(LoginAdmin);

// export default LoginAdmin;
