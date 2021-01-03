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
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import DemoNavbar from "components/Navbars/UserNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import { Alert } from "reactstrap";

import routes from "userRoutes.js";
import firebase from "firebase";
import config from "config";
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: this.props.fakeAuth.nama,
      nim: this.props.fakeAuth.nim,
      backgroundColor: "black",
      activeColor: "info",
      events: [],
      statusProposal: -1 //-1 = no proposal, 0 = menunggu, 1 = diterima, 2 = ditolak
    };
    this.mainPanel = React.createRef();
    if (!firebase.apps.length) {
      // firebase.initializeApp({});
      this.app = firebase.initializeApp(config);
    } else {
      this.app = firebase.apps[0];
    }
  }

  renderAlert(statusProposal) {
    switch (statusProposal) {
      case 0:
        return (
          <Alert color="info">
            Proposal Seminar Anda dalam proses <i>review</i>. Harap menunggu.
          </Alert>
        );
      // break;
      case 1:
        return (
          <Alert color="success">
            Proposal Seminar Anda telah diterima oleh Admin. Silakan lihat
            jadwal di kalender
          </Alert>
        );
      // break;
      case 2:
        return (
          <Alert color="danger">
            Proposal Seminar Anda ditolak oleh Admin. Silakan mengisi kembali
            Form Seminar Tugas Akhir
          </Alert>
        );
    }
  }

  componentWillMount() {
    var isExist = false;
    var eventSeminar = {};
    const proposal_seminar_ref = this.app
      .database()
      .ref()
      .child("proposal-seminar/" + this.state.nim);
    proposal_seminar_ref.on("value", snap => {
      console.log("Does it exist? " + snap.exists());
      isExist = snap.exists();
      eventSeminar = snap.val();

      if (!isExist) {
        this.setState({
          statusProposal: -1
        });
        console.log("statusProposal = -1");
      } else {
        if (eventSeminar.statusProposal === "terima") {
          this.setState({
            statusProposal: 1
          });
          console.log("statusProposal = 1");
        } else if (eventSeminar.statusProposal === "tunggu") {
          this.setState({
            statusProposal: 0
          });
          console.log("statusProposal = 0");
        } else if (eventSeminar.statusProposal === "tolak") {
          this.setState({
            statusProposal: 2
          });
          console.log("statusProposal = 2");
        }
      }
    });

    // const seminar_ref = this.app
    //   .database()
    //   .ref()
    //   .child("seminar");
    // const previousEvents = this.state.events;
    // seminar_ref.on("child_added", snap => {
    //   previousEvents.push({
    //     judul: snap.val().judul,
    //     startDate: snap.val().startDate,
    //     // end: snap.val().startDate,
    //     namaLengkap: snap.val().namaLengkap,
    //     nim: snap.val().nim,
    //     pembimbingDua: snap.val().pembimbingDua,
    //     pembimbingSatu: snap.val().pembimbingSatu,
    //     pengujiSatu: snap.val().pengujiSatu,
    //     pengujiDua: snap.val().pengujiDua,
    //     pengujiTiga: snap.val().pengujiTiga
    //   });
    //   this.setState({
    //     events: previousEvents
    //   });
    // });

    const previousEvents = this.state.events;
    axios.get('http://localhost:8000/seminar')
      .then(function (response) {
        console.log("yes");
          // handle success
          // console.log(response.data);
          // var data = response.data;
          response.data.forEach(function(data, index) {
            previousEvents.push({
              judul: data.judul,
              // startDate: snap.val().startDate,
              // end: snap.val().startDate,
              startDate: data.tanggal_dan_waktu,
              namaLengkap: data.user.name,
              nim: data.user.nim,
              pembimbingDua: data.pembimbing_dua,
              pembimbingSatu: data.pembimbing_satu,
              pengujiSatu: data.penguji_satu,
              pengujiDua: data.penguji_dua,
              pengujiTiga: data.penguji_tiga
            });
          });
          this.setState({
            events: previousEvents
          });
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .then(function () {
          // always executed
      });
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar
            fakeAuth={this.props.fakeAuth}
            {...this.props}
            nama={this.state.nama}
            nim={this.state.nim}
          />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  // component={prop.component}
                  render={() => {
                    return (
                      <prop.component
                        events={this.state.events}
                        app={this.app}
                        statusProposal={this.state.statusProposal}
                        {...this.props}
                        nama={this.state.nama}
                        nim={this.state.nim}
                        renderAlert={this.renderAlert}
                      ></prop.component>
                    );
                  }}
                  key={key}
                />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        /> */}
      </div>
    );
  }
}

export default Dashboard;
