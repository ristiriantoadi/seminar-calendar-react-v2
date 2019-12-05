import React from "react";
import Button from "react-bootstrap/button";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  // listURL = props.event.
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("something clicek");
    const data = new FormData(event.target);
    const nama = data.get("nama");
    const nim = data.get("nim");
    const judul = data.get("judul");
    const dosenPembimbing1 = data.get("dosen-pembimbing-1");
    const dosenPembimbing2 = data.get("dosen-pembimbing-2");
    const dosenPenguji1 = data.get("dosen-penguji-1");
    const dosenPenguji2 = data.get("dosen-penguji-2");
    const dosenPenguji3 = data.get("dosen-penguji-3");
    const waktuTanggal = data.get("waktu-tanggal");
    console.log(waktuTanggal);
    props.app
      .database()
      .ref("seminar/" + nim)
      .set({
        namaLengkap: nama,
        nim: nim,
        judul: judul,
        pembimbingSatu: dosenPembimbing1,
        pembimbingDua: dosenPembimbing2,
        pengujiSatu: dosenPenguji1,
        pengujiDua: dosenPenguji2,
        pengujiTiga: dosenPenguji3,
        startDate: waktuTanggal
      });
    props.app
      .database()
      .ref("proposal-seminar/" + nim + "/statusProposal")
      .set("terima");
    props.setAlert(nama, nim);
    props.history.push("/admin/seminar");
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Tambah Seminar</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>{props.event.start}</Modal.Body> */}
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <p>
            NIM:
            <input type="text" name="nim" value={props.event.nim}></input>
          </p>

          <p>
            Nama:
            <input
              type="text"
              name="nama"
              value={props.event.namaLengkap}
            ></input>
          </p>

          <p>
            Judul:
            <input type="text" name="judul" value={props.event.judul}></input>
          </p>
          <p>
            Dosen Pembimbing 1:
            <input
              type="text"
              name="dosen-pembimbing-1"
              value={props.event.pembimbingSatu}
            ></input>
          </p>
          <p>
            Dosen Pembimbing 2:
            <input
              type="text"
              name="dosen-pembimbing-2"
              value={props.event.pembimbingDua}
            ></input>
          </p>
          <p>
            Dosen Penguji 1:
            <select name="dosen-penguji-1">
              <option>---Pilih---</option>
              <option>Ir.Sri Endang Anjarwani, M.Kom</option>
              <option>Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng</option>
              <option>Dr. Eng. Budi Irmawati, S.Kom.,M.T.</option>
              <option>Ario Yudo Husoda.,S.T.,M.Kom</option>
              <option>Andy Hidayat Jatmika,S.T.,M.Kom</option>
              <option>Royana Afwani, S.T.,M.T.</option>
              <option>Nadiyasari Agitha, S.Kom.,M.Kom</option>
              <option>Ariyan Zubaidi,S.Kom.,M.T.</option>
              <option>Fitri Bimantoro S.T.,M.Kom</option>
              <option>Moh. Ali Akbar, S.T.,M.Eng</option>
              <option>Ahmad Zafrullah M.,S.T.,M.Eng</option>
              <option>Dr.Eng. I Gede Putu Wirarama WW., S.T.,M.T.</option>
              <option>Gibran Satya Nugraha, S.Kom.,M.Eng</option>
              <option>Ramaditia Dwiyansaputra,S.T.,M.Eng</option>
              <option>Arik Aranta, S.Kom.,M.Kom</option>
            </select>
          </p>
          <p>
            Dosen Penguji 2:
            <select name="dosen-penguji-2">
              <option>---Pilih---</option>
              <option>Ir.Sri Endang Anjarwani, M.Kom</option>
              <option>Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng</option>
              <option>Dr. Eng. Budi Irmawati, S.Kom.,M.T.</option>
              <option>Ario Yudo Husoda.,S.T.,M.Kom</option>
              <option>Andy Hidayat Jatmika,S.T.,M.Kom</option>
              <option>Royana Afwani, S.T.,M.T.</option>
              <option>Nadiyasari Agitha, S.Kom.,M.Kom</option>
              <option>Ariyan Zubaidi,S.Kom.,M.T.</option>
              <option>Fitri Bimantoro S.T.,M.Kom</option>
              <option>Moh. Ali Akbar, S.T.,M.Eng</option>
              <option>Ahmad Zafrullah M.,S.T.,M.Eng</option>
              <option>Dr.Eng. I Gede Putu Wirarama WW., S.T.,M.T.</option>
              <option>Gibran Satya Nugraha, S.Kom.,M.Eng</option>
              <option>Ramaditia Dwiyansaputra,S.T.,M.Eng</option>
              <option>Arik Aranta, S.Kom.,M.Kom</option>
            </select>
          </p>
          <p>
            Dosen Penguji 3:
            <select name="dosen-penguji-3">
              <option>---Pilih---</option>
              <option>Ir.Sri Endang Anjarwani, M.Kom</option>
              <option>Prof. I Gede Pasek Suta Wijaya S.T.,M.T.,D.Eng</option>
              <option>Dr. Eng. Budi Irmawati, S.Kom.,M.T.</option>
              <option>Ario Yudo Husoda.,S.T.,M.Kom</option>
              <option>Andy Hidayat Jatmika,S.T.,M.Kom</option>
              <option>Royana Afwani, S.T.,M.T.</option>
              <option>Nadiyasari Agitha, S.Kom.,M.Kom</option>
              <option>Ariyan Zubaidi,S.Kom.,M.T.</option>
              <option>Fitri Bimantoro S.T.,M.Kom</option>
              <option>Moh. Ali Akbar, S.T.,M.Eng</option>
              <option>Ahmad Zafrullah M.,S.T.,M.Eng</option>
              <option>Dr.Eng. I Gede Putu Wirarama WW., S.T.,M.T.</option>
              <option>Gibran Satya Nugraha, S.Kom.,M.Eng</option>
              <option>Ramaditia Dwiyansaputra,S.T.,M.Eng</option>
              <option>Arik Aranta, S.Kom.,M.Kom</option>
            </select>
          </p>
          <p>
            Tanggal dan waktu:
            <input type="datetime-local" name="waktu-tanggal"></input>
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="success">Terima</Button>
        <Button variant="danger">Tolak</Button> */}
          <Button type="submit" variant="warning">
            Publish
          </Button>

          {/* <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button> */}

          {/* <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button> */}
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default Example;
