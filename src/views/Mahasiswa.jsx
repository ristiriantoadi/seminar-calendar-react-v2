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
  // Alert,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/button";
// import Alert from "react-bootstrap/alert";

class Mahasiswa extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
  // handleSubmit(event) {
  //   // console.log("do something");
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   // console.log(data);
  //   // this.database.push().set({ text: data });
  //   // event.target
  //   const sendToFirebase = {
  //     text: data.get("text")
  //   };
  //   this.database.push().set(sendToFirebase);
  //   // this.state.inputText = "";
  //   this.setState({
  //     inputText: ""
  //   });
  //   this.setState({
  //     speed: 10
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log("something");
    const data = new FormData(event.target);
    console.log(data.get("nama-lengkap"));
    console.log(data.get("nim"));
    console.log(data.get("judul"));
    console.log(data.get("dosen-pembimbing-1"));
    console.log(data.get("dosen-pembimbing-2"));
    console.log(data.get("no-hp"));
    console.log(data.get("file-laporan"));

    this.props.app
      .database()
      .ref("proposal-seminar/" + data.get("nim"))
      .set({
        namaLengkap: data.get("nama-lengkap"),
        nim: data.get("nim"),
        judul: data.get("judul"),
        pembimbingSatu: data.get("dosen-pembimbing-1"),
        pembimbingDua: data.get("dosen-pembimbing-2"),
        noHp: data.get("no-hp")
      });
    const storage = this.props.app.storage();
    storage
      .ref("proposal-seminar/" + data.get("nim") + "/fileLaporan.pdf")
      .put(data.get("file-laporan"));
    storage
      .ref("proposal-seminar/" + data.get("nim") + "/fileKartuKontrol.pdf")
      .put(data.get("file-kartu-kontrol"));
    storage
      .ref("proposal-seminar/" + data.get("nim") + "/fileSuratPuas.pdf")
      .put(data.get("file-surat-puas"));
    storage
      .ref("proposal-seminar/" + data.get("nim") + "/fileKRS.pdf")
      .put(data.get("file-krs"));
    // console.log(this.props.events);
    this.props.history.push("/user/seminar");
  }

  // componentWillMount() {
  //   const proposal_seminar_ref = this.props.app
  //     .database()
  //     .ref()
  //     .child("proposal-seminar/F1D016078");
  //   proposal_seminar_ref.once("value", snap => {
  //     console.log(snap.exists());
  //   });
  //   // const previousEvents = this.state.events;
  //   // seminar_ref.on("child_added", snap => {
  //   //   previousEvents.push({
  //   //     judul: snap.val().judul,
  //   //     startDate: snap.val().startDate,
  //   //     // end: snap.val().startDate,
  //   //     namaLengkap: snap.val().namaLengkap,
  //   //     nim: snap.val().nim,
  //   //     pembimbingDua: snap.val().pembimbingDua,
  //   //     pembimbingSatu: snap.val().pembimbingSatu
  //   //   });
  //   //   this.setState({
  //   //     events: previousEvents
  //   //   });
  //   // });
  // }

  render() {
    console.log(this.props.app);
    return (
      <>
        <div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          {/* <Alert color="primary">This is primary alert</Alert> */}
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Form Seminar Tugas Akhir</CardTitle>
                  <Card>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md="6">
                          <Form.Row>
                            <Form.Group as={Col} controlId="Form.ControlNama">
                              <Form.Label>Nama</Form.Label>
                              <Form.Control
                                type="text"
                                name="nama-lengkap"
                                placeholder="Masukkan nama lengkap"
                              />
                            </Form.Group>
                          </Form.Row>
                          <Form.Group controlId="Form.ControlNama">
                            <Form.Label>NIM</Form.Label>
                            <Form.Control
                              type="text"
                              name="nim"
                              placeholder="Masukkan NIM"
                            />
                          </Form.Group>
                          <Form.Group controlId="Form.ControlJudul">
                            <Form.Label>Judul Tugas Akhir</Form.Label>
                            <Form.Control
                              type="text"
                              name="judul"
                              placeholder="Masukkan judul tugas akhir"
                            />
                          </Form.Group>
                          <Form.Group controlId="Form.ControlDospem1">
                            <Form.Label>Pembimbing 1</Form.Label>
                            <Form.Control as="select" name="dosen-pembimbing-1">
                              <option>---Pilih---</option>
                              <option>Ir.Sri Endang Anjarwani, M.Kom</option>
                              <option>
                                Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng
                              </option>
                              <option>
                                Dr. Eng. Budi Irmawati, S.Kom.,M.T.
                              </option>
                              <option>Ario Yudo Husoda.,S.T.,M.Kom</option>
                              <option>Andy Hidayat Jatmika,S.T.,M.Kom</option>
                              <option>Royana Afwani, S.T.,M.T.</option>
                              <option>Nadiyasari Agitha, S.Kom.,M.Kom</option>
                              <option>Ariyan Zubaidi,S.Kom.,M.T.</option>
                              <option>Fitri Bimantoro S.T.,M.Kom</option>
                              <option>Moh. Ali Akbar, S.T.,M.Eng</option>
                              <option>Ahmad Zafrullah M.,S.T.,M.Eng</option>
                              <option>
                                Dr.Eng. I Gede Putu Wirarama WW., S.T.,M.T.
                              </option>
                              <option>
                                Gibran Satya Nugraha, S.Kom.,M.Eng
                              </option>
                              <option>
                                Ramaditia Dwiyansaputra,S.T.,M.Eng
                              </option>
                              <option>Arik Aranta, S.Kom.,M.Kom</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="Form.ControlDospem2">
                            <Form.Label>Pembimbing 2</Form.Label>
                            <Form.Control as="select" name="dosen-pembimbing-2">
                              <option>---Pilih---</option>
                              <option>Ir.Sri Endang Anjarwani, M.Kom</option>
                              <option>
                                Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng
                              </option>
                              <option>
                                Dr. Eng. Budi Irmawati, S.Kom.,M.T.
                              </option>
                              <option>Ario Yudo Husoda.,S.T.,M.Kom</option>
                              <option>Andy Hidayat Jatmika,S.T.,M.Kom</option>
                              <option>Royana Afwani, S.T.,M.T.</option>
                              <option>Nadiyasari Agitha, S.Kom.,M.Kom</option>
                              <option>Ariyan Zubaidi,S.Kom.,M.T.</option>
                              <option>Fitri Bimantoro S.T.,M.Kom</option>
                              <option>Moh. Ali Akbar, S.T.,M.Eng</option>
                              <option>Ahmad Zafrullah M.,S.T.,M.Eng</option>
                              <option>
                                Dr.Eng. I Gede Putu Wirarama WW., S.T.,M.T.
                              </option>
                              <option>
                                Gibran Satya Nugraha, S.Kom.,M.Eng
                              </option>
                              <option>
                                Ramaditia Dwiyansaputra,S.T.,M.Eng
                              </option>
                              <option>Arik Aranta, S.Kom.,M.Kom</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="Form.ControlNoHP">
                            <Form.Label>No. HP</Form.Label>
                            <Form.Control
                              type="text"
                              name="no-hp"
                              placeholder="Masukkan nomor handphone yang dapat dihubungi"
                            />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Col>
                        <Col md="6">
                          {/* <Form.Group as={Col} controlId="Form.ControlNama"> */}
                          <Table striped bordered hover size="sm">
                            <thead>
                              <tr>
                                <th>No</th>

                                <th>Jenis Dokumen</th>
                                <th>Aksi</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  Kelengkapan Laporan (Cover, Lembar
                                  Pengesahan,Abstrak, Lembar Konsultasi)
                                </td>
                                <td>
                                  {/* <Button variant="primary" size="sm">
                                      Upload
                                    </Button> */}
                                  {/* <input type="file"></input> */}
                                  {/* <Form.Label>Upload file</Form.Label> */}
                                  <Form.Control
                                    type="file"
                                    name="file-laporan"
                                  ></Form.Control>
                                  {/* <Button variant="secondary" size="sm">
                                    Delete
                                  </Button> */}
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Kartu kontrol seminar proposal TA</td>
                                <td>
                                  <Form.Control
                                    type="file"
                                    name="file-kartu-kontrol"
                                  ></Form.Control>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Surat Puas PKL</td>
                                <td>
                                  <Form.Control
                                    type="file"
                                    name="file-surat-puas"
                                  ></Form.Control>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  Fotocopy KRS yang menunjukkan MK Tugas Akhir I
                                </td>
                                <td>
                                  <Form.Control
                                    type="file"
                                    name="file-krs"
                                  ></Form.Control>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          {/* </Form.Group> */}
                        </Col>
                      </Row>
                    </Form>
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

export default Mahasiswa;
