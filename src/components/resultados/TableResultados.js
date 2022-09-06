import React from "react";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TextInputNumber from "../common/TextInputNumber";
import PropTypes from "prop-types";

const TableResultados = ({ matches ,  errors = {}, onChange, onSaveClick, onDisableClick, onSavePointsUser, activeItem, Group}) => {
  return (
    <>
        <table className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>EquipoL</th>
                <th></th>
                <th></th>
                <th>EquipoV</th>
                <th>Grabar</th>
                <th>Deshabilitar</th>
                <th>Grabar Pts.</th>
              </tr>
            </thead>
            <tbody>
              {  
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                var sHabilitaBtn = "primary";
                var sSaveResultadosBtn = "primary";
                var sSavePointsBtn = "primary";
                if(match.RunUpdate){
                  sSavePointsBtn = "danger";
                }
                if(!match.habilitado){
                  sHabilitaBtn = "danger";
                }
                if(match.winner !== "" ){
                  if(match.winner !== "PPP"){
                    sSaveResultadosBtn = "danger";
                  }                  
                }
                
                if(match.Group === Group){
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
                          name="goalsTeamOne"
                          label=""
                          value={match.goalsTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={false}
                        />
                      </td>
                      <td>
                        <TextInputNumber
                          name="goalsTeamTwo"
                          value={match.goalsTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={false}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className={"imgFlag" + " imgFlag" + match.teamTwo} ></img> 
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>
                        <Button onClick={() => onSaveClick(match)} variant={sSaveResultadosBtn}><BiSave /></Button>
                      </td>
                      <td>
                        <Button onClick={() => onDisableClick(match)} variant={sHabilitaBtn}><BiSave /></Button>
                      </td>   
                      <td>
                        <Button onClick={() => onSavePointsUser(match)} variant={sSavePointsBtn}><BiSave /></Button>
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

TableResultados.propTypes = {
    matches: PropTypes.array.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    activeItem: PropTypes.object
  };


export default TableResultados;