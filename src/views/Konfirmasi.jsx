/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import Calendar from "Calendar";
// reactstrap components
import {
    UncontrolledAlert,
    Alert,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";
  
  import {Form} from 'react-bootstrap';
  import Table from 'react-bootstrap/Table';
  import Button from 'react-bootstrap/button';
  import Modal from "Modal";


class TambahSeminar extends React.Component {
  state = {
    visible: true
  };
  constructor() {
    super();
    this.state = {
      showModal: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  tambahseminarRef = React.createRef();
  handleClose() {
    this.setState({
      showModal: false
    });
  }
  notificationAlert = React.createRef();
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    this.notificationAlert.current.notificationAlert(options);
  }
  handleClick(info) {
    //showModal();
    // console.log("info.event.extendedProps: ");
    // console.log(info.event.extendedProps);
    const myEvent = {
      title: info.event.title,
      judul: info.event.extendedProps.judul,
      pembimbingDua: info.event.extendedProps.pembimbingDua,
      pembimbingSatu: info.event.extendedProps.pembimbingSatu
    };
    this.setState({
      showModal: true,
      clickedEvent: myEvent
    });
  }
  render() {
    const someEvents = this.props.events.map(event => ({
      title: "[Seminar TA 1] " + event.namaLengkap + " (" + event.nim + ")",
      start: event.startDate,
      judul: event.judul,
      pembimbingDua: event.pembimbingDua,
      pembimbingSatu: event.pembimbingSatu
    }));
    return (
      <>
      
<div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Konfirmasi Seminar Tugas Akhir</CardTitle>
                  <Card body>
                  <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                          <Button variant="success" size="sm"><Modal
                              event={this.state.clickedEvent}
                              show={this.state.showModal}
                              handleClose={this.handleClose}
                            ></Modal>
                            Lihat</Button>
                          <Button variant="primary" size="sm">Konfirmasi</Button>
                          <Button variant="secondary" size="sm">Tolak</Button> 
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                  </Card>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
        
      </>
    );
  }
  handleButtonClick() {}
}

export default TambahSeminar;
