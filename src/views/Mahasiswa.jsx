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

import axios from "axios";
import swal from "sweetalert";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
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

  readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


  handleSubmit(event) {
    event.preventDefault();
    const FormData = require('form-data');
    const data = new FormData(event.target);
    const formData = new FormData();

    console.log(data);
    var namaLengkap = data.get("nama_lengkap") 
    var nim = data.get("nim");
    var judul = data.get("judul");
    var dosenPembimbing1 = data.get("dosen_pembimbing_1");
    var dosenPembimbing2 = data.get("dosen_pembimbing_2");
    var noHp = data.get("no_hp");
    var fileLaporan = data.get("file_laporan");
    var fileKartuKontrol = data.get("file_kartu_kontrol");
    var fileSuratPuas = data.get("file_surat_puas");
    var fileKrs = data.get("file_krs");
    console.log(namaLengkap)
    console.log(nim)
    console.log(judul)
    console.log(dosenPembimbing1)
    console.log(dosenPembimbing2)
    console.log(noHp)
    console.log(fileLaporan)
    console.log(fileKartuKontrol)
    console.log(fileSuratPuas)
    console.log(fileKrs)


    formData.append("namaLengkap", namaLengkap);
    formData.append("nim", nim);
    formData.append("judul", judul);
    formData.append("dosenPembimbing1", dosenPembimbing1);
    formData.append("dosenPembimbing2", dosenPembimbing2);
    formData.append("noHp", noHp);
    formData.append("fileLaporan", fileLaporan);
    formData.append("fileKartuKontrol", fileKartuKontrol);
    formData.append("fileSuratPuas", fileSuratPuas);
    formData.append("fileKrs", fileKrs);

    
    // Send a POST request
    axios({
      method: 'post',
      url: 'http://localhost:8000/seminar/daftar',
      data
      // headers: {'Content-Type': 'multipart/form-data;--- WebKit193844043-h'}
    })
    .then(res=>{
      console.log(res)
      this.props.history.push("/user/seminar");
    })
    .catch(err=>{
      swal("Terjadi kesalahan dalam pengiriman data. Silahkan ulangi pengisian data");
      console.log(err)
    })

    // fetch('http://localhost:8000/seminar/daftar', {
    //   method: 'POST',
    //   credentials: 'include',
    //   body: new FormData(),
    //   headers:{
    //     "X-XSRF-TOKEN":this.readCookie("XSRF-TOKEN")
    //   }
    // }).then((response)=>{
    //   console.log(response);
    // })
    // console.log(this.readCookie("XSRF-TOKEN"))

    // axios.post('http://localhost:8000/seminar/daftar',{
    //   namaLengkap,
    //   nim,
    //   judul,
    //   dosenPembimbing1,
    //   dosenPembimbing2,
    //   noHp,
    //   fileLaporan,
    //   fileKartuKontrol,
    //   fileSuratPuas,
    //   fileKrs
    // })
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })

    // this.props.app
    //   .database()
    //   .ref("proposal-seminar/" + data.get("nim"))
    //   .set({
    //     namaLengkap: data.get("nama-lengkap"),
    //     nim: data.get("nim"),
    //     judul: data.get("judul"),
    //     pembimbingSatu: data.get("dosen-pembimbing-1"),
    //     pembimbingDua: data.get("dosen-pembimbing-2"),
    //     noHp: data.get("no-hp"),
    //     statusProposal: "tunggu",
    //     fileLaporan: "proposal-seminar/" + data.get("nim") + "/fileLaporan.pdf",
    //     fileKartuKontrol:
    //       "proposal-seminar/" + data.get("nim") + "/fileKartuKontrol.pdf",
    //     fileSuratPuas:
    //       "proposal-seminar/" + data.get("nim") + "/fileSuratPuas.pdf",
    //     fileKRS: "proposal-seminar/" + data.get("nim") + "/fileKRS.pdf"
    //   });
    // const storage = this.props.app.storage();
    // storage
    //   .ref("proposal-seminar/" + data.get("nim") + "/fileLaporan.pdf")
    //   .put(data.get("file-laporan"));
    // storage
    //   .ref("proposal-seminar/" + data.get("nim") + "/fileKartuKontrol.pdf")
    //   .put(data.get("file-kartu-kontrol"));
    // storage
    //   .ref("proposal-seminar/" + data.get("nim") + "/fileSuratPuas.pdf")
    //   .put(data.get("file-surat-puas"));
    // storage
    //   .ref("proposal-seminar/" + data.get("nim") + "/fileKRS.pdf")
    //   .put(data.get("file-krs"));
    // console.log(this.props.events);
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
    // console.log(this.props.app);
    if (this.props.statusProposal === -1 || this.props.statusProposal === 2) {
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
                                  name="nama_lengkap"
                                  value={this.props.nama}
                                  placeholder="Masukkan nama lengkap"
                                  required
                                  // disabled
                                />
                              </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="Form.ControlNama">
                              <Form.Label>NIM</Form.Label>
                              <Form.Control
                                required
                                // disabled
                                type="text"
                                value={this.props.nim}
                                name="nim"
                                placeholder="Masukkan NIM"
                              />
                            </Form.Group>
                            <Form.Group controlId="Form.ControlJudul">
                              <Form.Label>Judul Tugas Akhir</Form.Label>
                              <Form.Control
                                required
                                type="text"
                                name="judul"
                                placeholder="Masukkan judul tugas akhir"
                              />
                            </Form.Group>
                            <Form.Group controlId="Form.ControlDospem1">
                              <Form.Label>Pembimbing 1</Form.Label>
                              <Form.Control
                                required
                                as="select"
                                name="dosen_pembimbing_1"
                              >
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
                              <Form.Control
                                required
                                as="select"
                                name="dosen_pembimbing_2"
                              >
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
                                required
                                type="text"
                                name="no_hp"
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
                                      required
                                      type="file"
                                      name="file_laporan"
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
                                      required
                                      type="file"
                                      name="file_kartu_kontrol"
                                    ></Form.Control>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Surat Puas PKL</td>
                                  <td>
                                    <Form.Control
                                      required
                                      type="file"
                                      name="file_surat_puas"
                                    ></Form.Control>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    Fotocopy KRS yang menunjukkan MK Tugas Akhir
                                    I
                                  </td>
                                  <td>
                                    <Form.Control
                                      required
                                      type="file"
                                      name="file_krs"
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
    } else {
      const alert = this.props.renderAlert(this.props.statusProposal);
      return <div className="content">{alert}</div>;
    }
  }
  handleButtonClick() {}
}

export default Mahasiswa;
