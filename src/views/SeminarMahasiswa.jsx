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
import firebase from "firebase";
import {
  UncontrolledAlert,
  // Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// import config from "config";

class Seminar extends React.Component {
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
      status: -1 //0 = menunggu, 1=accepted,-1 = belum mengajukan
    };
  }
  // componentWillMount() {
  //   var isExist = false;
  //   var eventSeminar = {};
  //   const proposal_seminar_ref = this.props.app
  //     .database()
  //     .ref()
  //     .child("proposal-seminar/F1D016078");
  //   proposal_seminar_ref.once("value", snap => {
  //     console.log(snap.exists());
  //     isExist = snap.exists();
  //     eventSeminar = snap.val();

  //     // this.setState({
  //     //   status: 1
  //     // });
  //   });
  //   if (!isExist) {
  //     this.setState({
  //       status: -1
  //     });
  //   } else {
  //     if (eventSeminar.statusDiterima == true) {
  //       this.setState({
  //         status: 1
  //       });
  //     } else {
  //       this.setState({
  //         status: 0
  //       });
  //     }
  //   }

  // const previousEvents = this.state.events;
  // seminar_ref.on("child_added", snap => {
  //   previousEvents.push({
  //     judul: snap.val().judul,
  //     startDate: snap.val().startDate,
  //     // end: snap.val().startDate,
  //     namaLengkap: snap.val().namaLengkap,
  //     nim: snap.val().nim,
  //     pembimbingDua: snap.val().pembimbingDua,
  //     pembimbingSatu: snap.val().pembimbingSatu
  //   });
  //   this.setState({
  //     events: previousEvents
  //   });
  // });
  // }
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

  // renderAlert(statusProposal) {
  //   switch (statusProposal) {
  //     case 0:
  //       return (
  //         <Alert color="info">
  //           Proposal Seminar Anda dalam proses <i>review</i>. Harap menunggu.
  //         </Alert>
  //       );
  //       break;
  //     case 1:
  //       return (
  //         <Alert color="success">
  //           Proposal Seminar Anda telah diterima oleh Admin. Silakan lihat
  //           jadwal di kalender
  //         </Alert>
  //       );
  //       break;
  //     case 2:
  //       return (
  //         <Alert color="danger">
  //           Proposal Seminar Anda ditolak oleh Admin. Silakan mengisi kembali
  //           Form Seminar Tugas Akhir
  //         </Alert>
  //       );
  //   }
  // }

  render() {
    // console.log("Status proposal " + this.props.statusProposal);
    const statusAlert = this.props.renderAlert(this.props.statusProposal);
    // console.log("key: "+this.props.key)
    return (
      <>
        <div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          {statusAlert}
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Kalender</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Card className="card-plain">
                        {/* <CardHeader>
                          <CardTitle tag="h5">Notifications Style</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                          <Calendar events={this.props.events}></Calendar>
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

export default Seminar;
