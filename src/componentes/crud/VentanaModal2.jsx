import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function VentanaModal2({show, handleClose, manejoDeClick , nameDelete}) {
  return(
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Mensaje del sistema!!!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Realmente deseas eliminar al  {nameDelete}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
      <Button variant="primary" onClick={manejoDeClick}>
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
  )
    
}

export default VentanaModal2;
