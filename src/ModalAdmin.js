import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";

function Example(props) {
  // listURL = props.event.
  console.log(props.event)
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          [Seminar TA 1] {props.event.name} ({props.event.nim}){" "}
        </Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>{props.event.start}</Modal.Body> */}
      <Modal.Body>
        {/* {console.log("the event object: ")}
        {console.log(props.event)} */}
        <p>Nama: {props.event.name}</p>
        <p>NIM: {props.event.nim}</p>
        <p>Judul TA 1: {props.event.judul}</p>
        <h6>Pembimbing</h6>
        <ul style={{ listStyleType: "none", padding: "0px" }}>
          <li>1. {props.event.pembimbing_satu}</li>
          <li>2. {props.event.pembimbing_dua}</li>
        </ul>
        <h6>Berkas Prasyarat</h6>
        <ul>
          <li>
            <a href={props.event.fileKRSURL}>File Krs</a>
          </li>
          <li>
            <a href={props.event.fileKartuKontrolURL}>File Kartu kontrol</a>
          </li>
          <li>
            <a href={props.event.fileLaporanURL}>File Laporan</a>
          </li>
          <li>
            <a href={props.event.fileLaporanURL}>File Surat Puas</a>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="success" onClick={props.handleTerima}> */}
        <Button variant="success" onClick={e => props.handleTerima(props.event)}>
          Terima
        </Button>
        {/* <Button variant="danger"  onClick={props.handleTolak}> */}
        <Button variant="danger"  onClick={e => props.handleTolak(props.event)}>
          Tolak
        </Button>
        {/* <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button> */}

        {/* <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
