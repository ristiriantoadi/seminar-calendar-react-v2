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
// import Calendar from "Calendar";
// reactstrap components
import firebase from "firebase";
import ModalAdmin from "ModalAdmin";
import ModalTambahSeminar from "ModalAdminTambahSeminar";
import {
  UncontrolledAlert,
  Alert,
  // Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";
// import config from "config";

class ProposalSeminar extends React.Component {
  constructor() {
    super();
    // if (!firebase.apps.length) {
    //   // firebase.initializeApp({});
    //   this.app = firebase.initializeApp(config);
    // } else {
    //   this.app = firebase.apps[0];
    // }
    // this.database = this.app
    //   .database()
    //   .ref()
    //   .child("seminar");
    this.state = {
      // events: [],
      visible: true,
      showModal: false,
      showModalTambahSeminar: false,
      clickedProposal: {}
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModalTambahSeminar = this.handleCloseModalTambahSeminar.bind(
      this
    );
    this.handleTerima = this.handleTerima.bind(this);
    this.handleTolak = this.handleTolak.bind(this);
  }
  // componentDidMount() {
  //   const previousEvents = this.state.events;
  //   this.database.on("child_added", snap => {
  //     previousEvents.push({
  //       title: snap.val().title,
  //       start: snap.val().startDate,
  //       end: snap.val().startDate
  //     });
  //     this.setState({
  //       events: previousEvents
  //     });
  //     console.log(this.state.events);
  //   });
  // }
  // state = {
  //   visible: true
  // };
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

  handleClose() {
    this.setState({
      showModal: false
    });
  }
  handleCloseModalTambahSeminar() {
    this.setState({
      showModalTambahSeminar: false
    });
  }

  handleClick(proposalSeminar) {
    var baseURL = "http://localhost:8000/storage/proposal_seminar/"+proposalSeminar.user.nim+"/"
    this.setState((state, props) => {
      return {clickedProposal: {
        id:proposalSeminar.id,
        user_id:proposalSeminar.user_id,
        name:proposalSeminar.user.name,
        nim:proposalSeminar.user.nim,
        judul:proposalSeminar.judul,
        pembimbing_satu:proposalSeminar.pembimbing_satu,
        pembimbing_dua:proposalSeminar.pembimbing_dua,
        fileKRSURL:baseURL+"file_krs.pdf",
        fileKartuKontrolURL:baseURL+"file_kartu_kontrol.pdf",
        fileLaporanURL:baseURL+"file_laporan.pdf",
        fileSuratPuasURL:baseURL+"file_surat_puas.pdf"
      },showModal:true};
      },()=>{
        // console.log("clicked-proposal");
        // console.log(this.state.clickedProposal)
      });

    // this.setState({
    //   clickedProposal: proposalSeminar,
    //   showModal: true
    // });
    // console.log(this.state.clickedProposal)
  }

  handleTerima(proposalSeminar) {

    this.setState({
      showModalTambahSeminar: true,
      showModal: false
    });
  }
  
  handleTolak(proposalSeminar) {
    axios.post('http://localhost:8000/admin/proposal_seminar/tolak',{
      id:proposalSeminar.id
    })
    .then(res=>{
      console.log(res)
      this.setState({
        showModal: false
      });
      this.props.setAlertTolak(
        this.state.clickedProposal.name,
        this.state.clickedProposal.nim
      );
      this.props.updateDaftarProposalSeminar()
    })
    .catch(err=>{
      console.log(err)
    })
  }
  renderAlert(alert) {
    // if (alert != "") {
    //   return <Alert color="danger">{alert}</Alert>;
    // } else {
    //   return;
    // }
    if(alert.includes("ditambahkan")){
      return <Alert color="success">{alert}</Alert>;
    }else if(alert.includes("ditolak")){
      return <Alert color="danger">{alert}</Alert>;
    }
  }

  render() {
    const alert = this.renderAlert(this.props.alert);
    const tableStyle = {
      border: "1px solid #000000",
      borderCollapse: "collapse"
    };
    const rowTable = this.props.proposalSeminars.map(proposalSeminar => {
      return (
        <tr>
          <td>{proposalSeminar.user.nim}</td>
          <td>{proposalSeminar.user.name}</td>
          <td>{proposalSeminar.judul}</td>
          <td>
            <Button variant="primary" onClick={e => this.handleClick(proposalSeminar)}>
              Lihat dokumen
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <div className="content">
          <ModalAdmin
            // app={this.props.app}
            event={this.state.clickedProposal}
            show={this.state.showModal}
            handleClose={this.handleClose}
            handleTerima={this.handleTerima}
            handleTolak={this.handleTolak}
          ></ModalAdmin>
          <ModalTambahSeminar
            app={this.props.app}
            clickedProposal={this.state.clickedProposal}
            updateDaftarProposalSeminar={this.props.updateDaftarProposalSeminar}
            history={this.props.history}
            show={this.state.showModalTambahSeminar}
            handleClose={this.handleCloseModalTambahSeminar}
            setAlert={this.props.setAlert}
            event={this.state.clickedProposal}
          ></ModalTambahSeminar>
          <NotificationAlert ref={this.notificationAlert} />
          {alert}
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Daftar Proposal Seminar</CardTitle>
                  {/* <p className="card-category">
                    Handcrafted by our colleague{" "}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/manu.nazare/"
                    >
                      Nazare Emanuel-Ioan (Manu)
                    </a>
                    . Please checkout the{" "}
                    <a
                      href="https://github.com/creativetimofficial/react-notification-alert"
                      target="_blank"
                    >
                      full documentation.
                    </a>
                  </p> */}
                </CardHeader>
                <CardBody>
                  {/* <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle tag="h5">Notifications Style</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Alert color="info">
                            <span>This is a plain notification</span>
                          </Alert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              This is a notification with close button.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              This is a notification with close button and icon.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-chart-pie-36"
                            />
                            <span data-notify="message">
                              This is a notification with close button and icon
                              and have many lines. You can see that the icon and
                              the close button are always vertically aligned.
                              This is a beautiful notification. So you don't
                              have to worry about the style.
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle tag="h5">Notification states</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              <b>Primary - </b>
                              This is a regular notification made with
                              color="primary"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              <b>Info - </b>
                              This is a regular notification made with
                              color="info"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="success" fade={false}>
                            <span>
                              <b>Success - </b>
                              This is a regular notification made with
                              color="success"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="warning" fade={false}>
                            <span>
                              <b>Warning - </b>
                              This is a regular notification made with
                              color="warning"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="danger" fade={false}>
                            <span>
                              <b>Danger - </b>
                              This is a regular notification made with
                              color="danger"
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row> */}

                  <Row>
                    <Col md="12">
                      <Card className="card-plain">
                        {/* <CardHeader>
                          <CardTitle tag="h5">Notifications Style</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>NIM</th>
                              <th>Nama Mahasiswa</th>
                              <th>Judul Tugas Akhir</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rowTable}
                          </tbody>
                        </Table>
                          {/* <Calendar events={this.props.events}></Calendar> */}
                          {/* <table style={tableStyle}>
                            <tr style={tableStyle}>
                              <th style={tableStyle}>NIM</th>
                              <th style={tableStyle}>Nama</th>
                              <th style={tableStyle}>Judul</th>
                              <th style={tableStyle}>Aksi</th>
                            </tr>
                            {rowTable}
                          </table> */}
                          
                        </CardBody>
                        {/* <CardBody>
                          <Alert color="info">
                            <span>This is a plain notification</span>
                          </Alert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              This is a notification with close button.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              This is a notification with close button and icon.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-chart-pie-36"
                            />
                            <span data-notify="message">
                              This is a notification with close button and icon
                              and have many lines. You can see that the icon and
                              the close button are always vertically aligned.
                              This is a beautiful notification. So you don't
                              have to worry about the style.
                            </span>
                          </UncontrolledAlert>
                        </CardBody> */}
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  handleButtonClick() {}
}

export default ProposalSeminar;
