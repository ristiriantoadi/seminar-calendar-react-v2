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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import {Form} from 'react-bootstrap'

class TambahSeminar extends React.Component {
  state = {
    visible: true
  };
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
  render() {
    return (
      <>
      
<div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Tambah Seminar</CardTitle>
                  <Card body>
                  <Form.Group controlId="Form.ControlNama">
                    <Form.Label>Nama</Form.Label>
                      <Form.Control type="email" placeholder="masukkan nama lengkap" />
                    </Form.Group>
                    <Form.Group controlId="Form.ControlNama">
                    <Form.Label>NIM</Form.Label>
                      <Form.Control type="NIM" placeholder="masukkan NIM" />
                    </Form.Group>
                    <Form.Group controlId="Form.ControlJudul">
                    <Form.Label>Judul Tugas Akhir</Form.Label>
                      <Form.Control type="judul" placeholder="masukkan judul tugas akhir" />
                    </Form.Group>
                    <Form.Group controlId="Form.ControlDospem1">
                      <Form.Label>Pembimbing 1</Form.Label>
                      <Form.Control as="select">
                        <option>Ir.Sri Endang Anjarwani, M.Kom</option>
                        <option>Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
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
