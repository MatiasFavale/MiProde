import React from "react";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TextInputNumber from "../common/TextInputNumber";
import PropTypes from "prop-types";

const TableFixtureOctavos = ({matches = [],  errors = {}, onChange, onSaveClick, activeItem={}, OC1, OC2, OC3, OC4}) => {
  return (
    <>
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableOctHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.code === OC1 || match.code === OC2 || match.code === OC3 || match.code === OC4){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className={"imgFlag" + " imgFlag" + match.teamOne} ></img>            
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInputNumber
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInputNumber
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                        <img className={"imgFlag" + " imgFlag" + match.teamTwo} ></img>          
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>                    
                    </tr>
                  );
                }
                
              })}
            </tbody>
        </table>
    </>
  )
};

TableFixtureOctavos.propTypes = {
    matches: PropTypes.array.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    activeItem: PropTypes.object
  };


export default TableFixtureOctavos;