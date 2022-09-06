import React from "react";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

const TableFixture = (matchesTab, errors = {}, onChange, onSaveClick) => {
    console.log(matchesTab);
  return (
    <>
    <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
        <thead>
        <tr>
            <th>Fecha</th>
            <th>EquipoL</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>EquipoV</th>
            <th>Estadio</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        { 
        matchesTab.map(match => {
            var sCode = match.code;
            var sClass = "class" + match.Group;
            if(match.Group === "A"){
            return (
                <tr className={sClass} key={match.code}>
                
                <td>{match.Fecha}</td>            
                <td>
                    <div className="imageEquipo">
                    <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                    <br></br>
                    <span>{match.EquipoL}</span>
                    </div>
                </td>
                <td>
                    <TextInput
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
                    <TextInput
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
                    <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
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


export default TableFixture;