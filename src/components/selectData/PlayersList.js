import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextInput from "../common/TextInput";
import TextInputNumber from "../common/TextInputNumber";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";
import { BiSave } from "react-icons/bi";

const PlayersList = ({
  players,
  teams,
  onChange,
  onChangeChampion,
  onSave,
  onSaveCampeon,
  onDisabledSelect,
  saving = false,
  errors = {},
  campeon
}) => {
  return (
    <>
      <Button variant="primary" onClick={(event) => onDisabledSelect(event)}>
        Deshabilitar seleccion
      </Button>

      <table className="table table-striped table-bordered table-hover table-dark tableOctHeight">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Goles</th>
            <th>Puntos</th>
            <th></th>
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
                  <TextInputNumber
                    name="goals"
                    label=""
                    value={jugador.goals}
                    onChange={(event) => onChange(jugador,event)}
                    disabled={false}
                  />  
                </td> 
                <td>{jugador.points}</td> 
                <td>
                  {<Button onClick={() => onSave(jugador)} variant="primary"><BiSave /></Button>}              
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <div>
        <SelectInput 
          name="teamSelect"
          label=""
          value={campeon.code || ""}
          defaultOption="Select Champion"
          options={teams.map(team => ({
            value: team.code,
            text: team.name
          }))}
          onChange={(event) => onChangeChampion(event)}
          error={errors.champion}
        />
        <br></br>
        <div className="text-center">
        
          <img className={"rounded imgFlagSelect" + " imgFlag" + campeon.code} ></img> 
          <br></br>          
        </div>
        <br></br>
        <div>
          <Button onClick={() => onSaveCampeon(campeon)} variant="primary"><BiSave /></Button>
        </div>
      </div>
      <br></br>
    </>
  );
};

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onChangeChampion: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSaveCampeon: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PlayersList;

