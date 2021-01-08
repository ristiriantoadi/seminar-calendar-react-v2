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

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routes.js";
import firebase from "firebase";
import config from "config";
import axios from "axios";
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
      events: [],
      proposalSeminars: [],
      alert: ""
    };
    this.mainPanel = React.createRef();

    this.updateProposals = this.updateProposals.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.setAlertTolak = this.setAlertTolak.bind(this);
    this.updateDaftarProposalSeminar = this.updateDaftarProposalSeminar.bind(this);

    if (!firebase.apps.length) {
      // firebase.initializeApp({});
      this.app = firebase.initializeApp(config);
    } else {
      this.app = firebase.apps[0];
    }
    // this.database = this.app
    //   .database()
    //   .ref()
    //   .child("seminar");
  }

  updateProposals(proposals) {
    console.log("update is called!!!");
    this.setState({
      proposalSeminars: proposals
    });
  }

  setAlert(nama, nim) {
    this.setState({
      alert: "Seminar atas nama " + nama + " (" + nim + ") telah ditambahkan"
    });
  }

  setAlertTolak(nama, nim) {
    this.setState({
      alert: "Seminar atas nama " + nama + " (" + nim + ") telah ditolak"
    });
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }

    this.updateDaftarProposalSeminar()
        //get seminar data
        const previousEvents = [];
        axios.get('http://localhost:8000/admin/seminar')
          .then((response) => {
              response.data.forEach(function(data, index) {
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
                  backgroundColor:"blue"
                });
              });
              this.setState((state, props) => {
                return {events:previousEvents};
              });
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

  updateDaftarProposalSeminar(){
    axios.get('http://localhost:8000/admin/proposal_seminar')
    .then((response)=> {
        // handle success
        console.log(response.data);
        this.setState((state, props) => {
          return {proposalSeminars: response.data};
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

  render() {
    // console.log(this.state.events);
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar fakeAuth={this.props.fakeAuth} {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  key={window.location.href}
                  path={prop.layout + prop.path}
                  render={() => (
                    <prop.component
                      key={window.location.href}
                      events={this.state.events}
                      proposalSeminars={this.state.proposalSeminars}
                      setAlert={this.setAlert}
                      setAlertTolak={this.setAlertTolak}
                      alert={this.state.alert}
                      updateProposals={this.updateProposals}
                      updateDaftarProposalSeminar={this.updateDaftarProposalSeminar}
                      {...this.props}
                      app={this.app}
                    ></prop.component>
                  )}
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
