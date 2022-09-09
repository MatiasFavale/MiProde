import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";


const HomePage = ({onShow,  onClose, onNext, onBack, pages,  show}) => (
  <div className="jumbotron">
    <h1>Mi Prode Qatar 2022</h1>
    <p className="letraBlanca">Presione para ver las reglas del juego</p>
    <Button onClick={onShow} variant="secondary">Reglas</Button>

    <Modal show={show} onHide={onClose} dialogClassName="modal-90w">
      <Modal.Header closeButton className="fondoClass">
        <Modal.Title className="labelFont">Reglas</Modal.Title>
      </Modal.Header>
      <Modal.Body className="fondoClass">
        <div hidden={!pages.Registro}>
          <p className="labelFont">Registro</p>
          <p className="letraBlanca">Para registrarse debe introducir, Nombre, Email, Password y presionar Enviar.</p>
          <p className="letraBlanca">Llegar un codigo de autorizacion via mail para completar con el registro</p><br/>
          <Button onClick={onNext} variant="secondary"><BsFillArrowRightCircleFill /></Button>          
        </div>
        <div hidden={!pages.Puntos}>
          <p className="labelFont">Suma de Puntos</p>
          <p className="letraBlanca">Por acierto de ganador, perdedor y empate del partido     <strong className="labelGreen">+3</strong></p>
          <p className="letraBlanca">Por acierto exacto de resultado (Invalida el +3 anterior) <strong className="labelGreen">+5</strong></p>
          <p className="letraBlanca">Por cada gol del Jugador elegido                          <strong className="labelGreen">+5</strong></p>
          <p className="letraBlanca">Por acierto del equipo Campeon del Mundial Qatar 2022     <strong className="labelGreen">+50</strong></p><br/>
          <Button  onClick={onBack} variant="secondary"><BsFillArrowLeftCircleFill /></Button>          
        </div>
      </Modal.Body>
      <Modal.Footer className="fondoClass">
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  
);

HomePage.propTypes = {
  onShow: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default HomePage;
