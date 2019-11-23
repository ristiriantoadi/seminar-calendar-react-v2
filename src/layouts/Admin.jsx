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
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
      events: [],
      proposalSeminars: []
    };
    this.mainPanel = React.createRef();
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
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillMount() {
    const proposal_ref = this.app
      .database()
      .ref()
      .child("proposal-seminar");
    const previousProposals = this.state.proposalSeminars;
    proposal_ref.on("child_added", snap => {
      //download from URL here
      var storage = firebase.storage();
      // var pathReference = storage.ref("proposal-seminar/F1D016078");
      var fileKRSReference = storage.ref(snap.val().fileKRS);
      fileKRSReference.getDownloadURL().then(fileKRSURL => {
        var fileKartuKontrolReference = storage.ref(
          snap.val().fileKartuKontrol
        );
        fileKartuKontrolReference.getDownloadURL().then(fileKartuKontrolURL => {
          var fileLaporanReference = storage.ref(snap.val().fileLaporan);
          fileLaporanReference.getDownloadURL().then(fileLaporanURL => {
            var fileSuratPuasReference = storage.ref(snap.val().fileSuratPuas);
            fileSuratPuasReference.getDownloadURL().then(fileSuratPuasURL => {
              // console.log("URL File Kartu Kontrol: " + fileKartuKontrolURL);
              // console.log("URL File Laporan: " + fileLaporanURL);
              // console.log("URL File Surat Puas: " + fileSuratPuasURL);
              // console.log("URL File KRS: " + fileKRSURL);
              previousProposals.push({
                nim: snap.val().nim,
                judul: snap.val().judul,
                namaLengkap: snap.val().namaLengkap,
                noHP: snap.val().noHP,
                pembimbingDua: snap.val().pembimbingDua,
                pembimbingSatu: snap.val().pembimbingSatu,
                fileKartuKontrolURL: fileKartuKontrolURL,
                fileLaporanURL: fileLaporanURL,
                fileSuratPuasURL: fileSuratPuasURL,
                fileKRSURL: fileKRSURL
              });
              this.setState({
                proposalSeminars: previousProposals
              });
            });
          });
        });
      });

      // console.log("Proposal seminar: " + this.state.proposalSeminars);
    });

    //download files from URL

    const seminar_ref = this.app
      .database()
      .ref()
      .child("seminar");
    const previousEvents = this.state.events;
    seminar_ref.on("child_added", snap => {
      previousEvents.push({
        judul: snap.val().judul,
        startDate: snap.val().startDate,
        // end: snap.val().startDate,
        namaLengkap: snap.val().namaLengkap,
        nim: snap.val().nim,
        pembimbingDua: snap.val().pembimbingDua,
        pembimbingSatu: snap.val().pembimbingSatu
      });
      this.setState({
        events: previousEvents
        // proposalSeminars: previousProposals
      });
    });
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
                  path={prop.layout + prop.path}
                  render={() => (
                    <prop.component
                      events={this.state.events}
                      proposalSeminars={this.state.proposalSeminars}
                    ></prop.component>
                  )}
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
