import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";


const PlayersList = ({
  players,
  onChange,
  onSave,
  onDisabledSelect,
  saving = false,
  errors = {}
}) => {
  return (
    <>
      <Button variant="primary" onClick={(event) => onDisabledSelect(event)}>
        Deshabilitar seleccion
      </Button>

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
            return (
              <tr key={jugador.code}>    
                <td>{jugador.name}</td>         
                
                <td>
                  
                  <TextInput
                    name="goals"
                    label=""
                    value={jugador.goals}
                    onChange={(event) => onChange(jugador,event)}
                    disabled={false}
                  />  
                </td> 
                <td>{jugador.points}</td> 
                <td>
                  {<button className="btn btn-outline-danger" onClick={() => onSave(jugador)}>
                    Save
                  </button>
                  }              
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PlayersList;

