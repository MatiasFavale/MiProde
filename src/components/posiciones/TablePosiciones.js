import React from "react";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

const TablePosiciones = ({posicionesteamsGrupos ,  errors = {}}) => {
  return (
    <>
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
            <thead>
                <tr>
                <th className="thPosiciones">Equipo</th>
                <th>Puntos</th>
                <th>GF</th>
                <th>GC</th>
                </tr>
            </thead>
            <tbody>
            {      
                posicionesteamsGrupos.map(posteam => {
                var sCode = posteam.code;
                return (
                <tr key={posteam.code}>              
                    <td>
                    <div>
                    
                        <img className={"imgFlag" + " imgFlag" + posteam.code} ></img>  
                        <span> {posteam.name}</span>
                    </div>
                    </td> 
                    <td>{posteam.points}</td> 
                    <td>{posteam.goalsf}</td> 
                    <td>{posteam.goalsc}</td>               
                </tr>
                );
            })}
            </tbody>
        </table>
    </>
  )
};


export default TablePosiciones;