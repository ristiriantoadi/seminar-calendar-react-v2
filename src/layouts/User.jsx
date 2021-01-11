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
import { Alert } from "reactstrap";

import routes from "userRoutes.js";
import firebase from "firebase";
import config from "config";
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: localStorage.getItem("nama"),
      nim: localStorage.getItem("nim"),
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
      case 1:
        return (
          <Alert color="success">
            Proposal Seminar Anda telah diterima oleh Admin. Silakan lihat
            jadwal di kalender
          </Alert>
        );
      case 2:
        return (
          <Alert color="danger">
            Proposal Seminar Anda ditolak oleh Admin. Silakan mengisi kembali
            Form Seminar Tugas Akhir
          </Alert>
        );
    }
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    
    //get seminar data
    const previousEvents = [];
    axios.get('http://localhost:8000/seminar')
      .then((response) => {
          response.data.forEach((data, index)=>{
            var backgroundColor = "blue";
            if(data.user.nim == this.state.nim){
              backgroundColor = "green";  
            }
            previousEvents.push({
              judul: data.judul,
              startDate: data.tanggal_dan_waktu,
              namaLengkap: data.user.name,
              nim: data.user.nim,
              pembimbingDua: data.pembimbing_dua,
              pembimbingSatu: data.pembimbing_satu,
              pengujiSatu: data.penguji_satu,
              pengujiDua: data.penguji_dua,
              pengujiTiga: data.penguji_tiga,
              backgroundColor
            });
          });
          this.setState((state, props) => {
            return {events:previousEvents};
          });
      })
      //check the proposal status of the user
      .then(()=>{
        return axios.get('http://localhost:8000/seminar/status_seminar_proposal')
      })
      .then(response=>{
        this.setState((state, props) => {
          return {statusProposal: response.data};
        });
      
      })
      .catch(function (error) {
          // handle error
          console.log("Error")
          console.log(error);
      })
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
              // console.log(window.location.href)
              return (
                <Route
                  path={prop.layout + prop.path}
                  // component={prop.component}
                  key={window.location.href}
                  render={() => {
                    return (
                      <prop.component
                        events={this.state.events}
                        app={this.app}
                        statusProposal={this.state.statusProposal}
                        key={window.location.href}
                        {...this.props}
                        nama={this.state.nama}
                        nim={this.state.nim}
                        renderAlert={this.renderAlert}
                      ></prop.component>
                    );
                  }}
                  // key={key}
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
