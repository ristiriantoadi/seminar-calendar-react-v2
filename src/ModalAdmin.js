import React from "react";
import Button from "react-bootstrap/button";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  // listURL = props.event.
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          [Seminar TA 1] {props.event.namaLengkap} ({props.event.nim}){" "}
        </Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>{props.event.start}</Modal.Body> */}
      <Modal.Body>
        {/* {console.log("the event object: ")}
        {console.log(props.event)} */}
        <p>Judul: {props.event.judul}</p>
        {/* <p>Tanggal: {props.event.tanggal}</p> */}
        <p>Pembimbing Satu: {props.event.pembimbingSatu}</p>
        <p>Pembimbing Dua: {props.event.pembimbingDua}</p>
        <p>Files: </p>
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
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
