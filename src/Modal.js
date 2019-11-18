import React from "react";
import Button from "react-bootstrap/button";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.event.start}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
