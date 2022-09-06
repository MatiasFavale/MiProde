import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

const PlayerModalPage = ({
  player,
  habilitado,
  players,
  onShow,
  onClose,
  show,
  onChange,
  onSave,
  saving = false,
  errors = {}
}) => {
  console.log(player);
  return (
    <>
      <Button onClick={onShow} variant="secondary">Elegir Jugador</Button>
      <br></br>
      <table className="table table-striped table-bordered table-hover table-dark">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Goles</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {      
          players.map(jugador => {
            var sCode = jugador.code;
            var sClass
            if(player.playerSelect === jugador.code){
              sClass = "selectedPlayer";
            }else{
              sClass = "";
            }
            return (
              <tr key={jugador.code}>    
                <td className={sClass}><p className={sClass}>{jugador.name}</p></td> 
                
                <td><p className={sClass}>{jugador.goals}</p></td> 
                <td><p className={sClass}>{jugador.points}</p></td> 
                
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onHide={onClose} dialogClassName="modal-90w">
        <Modal.Header closeButton className="fondoClass">
          <Modal.Title className="labelFont">Elegi tu Jugador</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fondoClass">

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="labelFont">Jugadores</Form.Label>              
              <div>
              {
                habilitado ?
                <SelectInput
                  name="playerSelect"
                  label=""
                  value={player.playerSelect || ""}
                  defaultOption="Select Player"
                  options={players.map(play => ({
                    value: play.code,
                    text: play.name
                  }))}
                  onChange={onChange}
                  error={errors.player}
                />
                :
                  <TextInput
                    name="playerSelect"
                    label=""
                    value={player.playerSelect || ""}
                    disabled={!habilitado}
                  />
                }                
                <br></br>
                <div className="text-center">
                  <img className={"rounded imagePlayer" + " imagePlayer" + player.playerSelect} ></img> 
                </div>
                
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="fondoClass">
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button hidden={!habilitado} variant="primary" onClick={onSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

PlayerModalPage.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onShow: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,  
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PlayerModalPage;

