import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Example(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('nama', props.clickedProposal.name);
    data.append('nim', props.clickedProposal.nim);
    data.append('judul', props.clickedProposal.judul);
    data.append('pembimbing_satu', props.clickedProposal.pembimbing_satu);
    data.append('pembimbing_dua', props.clickedProposal.pembimbing_dua);
    
    //terima proposal
    axios.post('http://localhost:8000/admin/proposal_seminar/terima',{
      id:props.clickedProposal.id
    })
    .then(res=>{
      return axios({
        method: 'post',
        url: 'http://localhost:8000/admin/seminar/tambah',
        data
       });
    })
    .then(res=>{
      props.updateDaftarProposalSeminar();
      props.setAlert(data.get('nama'), data.get('nim'));
      props.handleClose();
      // props.history.push("/admin/seminar");
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Tambah Seminar</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>{props.event.start}</Modal.Body> */}
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <input type="hidden" value={props.event.user_id} name="user_id"/>
          <Form.Group>
            <Form.Label>NIM</Form.Label>
            <Form.Control
              type="text"
              name="nim"
              placeholder="Masukkan NIM"
              disabled
              value={props.event.nim}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              disabled
              value={props.event.name}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Judul</Form.Label>
            <Form.Control
              name="judul"
              type="text"
              value={props.event.judul}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosen Pembimbing 1</Form.Label>
            <Form.Control
              name="pembimbing_satu"
              disabled
              type="text"
              value={props.event.pembimbing_satu}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosen Pembimbing 2</Form.Label>
            <Form.Control
              name="pembimbing_dua"
              disabled
              type="text"
              value={props.event.pembimbing_dua}
              disabled
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosen Penguji 1</Form.Label>
            <Form.Control as="select" name="penguji_satu">
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
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosen Penguji 2</Form.Label>
            <Form.Control as="select" name="penguji_dua">
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
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosen Penguji 3</Form.Label>
            <Form.Control as="select" name="penguji_tiga">
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
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tanggal dan waktu</Form.Label>
            <Form.Control
              type="date"
              name="tanggal"
            ></Form.Control>
            <Form.Control
              type="time"
              name="waktu"
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="warning">
            Publish
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Example;
