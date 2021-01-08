import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>[Seminar TA 1] {props.event.title}</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>{props.event.start}</Modal.Body> */}
      <Modal.Body>
        {/* {console.log("the event object: ")}
        {console.log(props.event)} */}
        <p>Nama: {props.event.namaLengkap}</p>
        <p>NIM: {props.event.nim}</p>
        <p>Hari/Tanggal: {props.event.tanggal}</p>
        <p>Waktu: {props.event.waktu} WITA</p>
        <p>Judul TA 1: {props.event.judul}</p>
        <h6>Pembimbing</h6>
        <ul style={{ listStyleType: "none", padding: "0px" }}>
          <li>1. {props.event.pembimbingSatu}</li>
          <li>2. {props.event.pembimbingDua}</li>
        </ul>
        <h6>Penguji</h6>
        <ul style={{ listStyleType: "none", padding: "0px" }}>
          <li>1. {props.event.pengujiSatu}</li>
          <li>2. {props.event.pengujiDua}</li>
          <li>3. {props.event.pengujiTiga}</li>
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
