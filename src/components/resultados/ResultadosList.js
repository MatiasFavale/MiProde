import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TableResultados from "./TableResultados";
import TableResultadosOctavos from "./TableResultadosOctavos";
import TableResultadosCuartos from "./TableResultadosCuartos";
import TableResultadosFinals from "./TableResultadosFinals";

const ResultadosList = ({ matches ,  errors = {}, onChange, onSaveClick, onDisableClick, onSavePointsUser, activeItem}) => (
  <>
    <div hidden={!activeItem.grupo}>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo A</p>
          </div>   
          <TableResultados Group={"A"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo B</p>
          </div>   
          <TableResultados Group={"B"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>

      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo C</p>
          </div>   
          <TableResultados Group={"C"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo D</p>
          </div> 
          <TableResultados Group={"D"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>

      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo E</p>
          </div>   
          <TableResultados Group={"E"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo F</p>
          </div>   
          <TableResultados Group={"F"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>

      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo G</p>
          </div>   
          <TableResultados Group={"G"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo H</p>
          </div> 
          <TableResultados Group={"H"} matches={matches} errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>
    </div>    

    <div hidden={!activeItem.octavos}>
      <div hidden={!activeItem.octavos} className="row">
        <div className="titleTable">
          <p>Octavos</p>
        </div>  
        <br></br>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosOctavos OC1={"OC1"} OC2={"OC3"} OC3={"OC5"} OC4={"OC7"} matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosOctavos OC1={"OC2"} OC2={"OC4"} OC3={"OC6"} OC4={"OC8"} matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>
    </div>

    <div hidden={!activeItem.cuartos}>
      <div hidden={!activeItem.cuartos} className="row">
        <div className="titleTable">
          <p>Cuartos</p>
        </div>  
        <br></br>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosCuartos CU1={"CU1"} CU2={"CU3"} matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosCuartos CU1={"CU2"} CU2={"CU4"} matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>
    </div>

    <div hidden={!activeItem.semifinal}>
      <div hidden={!activeItem.semifinal} className="row">
        <div className="titleTable">
          <p>Semifinales</p>
        </div>  
        <br></br>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosFinals FNS={"SF1"}  matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosFinals FNS={"SF2"}  matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>
    </div>

    <div hidden={!activeItem.final}>
      <div hidden={!activeItem.final} className="row">
        <div className="titleTable">
          <p>3er Puesto</p>
        </div>  
        <br></br>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosFinals FNS={"TP1"}  matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      <br></br>
    </div>

    <div hidden={!activeItem.final}>
      <div hidden={!activeItem.final} className="row">
        <div className="titleTable">
          <p>FINAL</p>
        </div>  
        <br></br>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableResultadosFinals FNS={"PP1"}  matches={matches} 
            errors={errors} onDisableClick={onDisableClick}
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} 
            onSavePointsUser={onSavePointsUser} />
        </div>
      </div>
      
      <br></br>
    </div>
    
  </>
  
);

ResultadosList.propTypes = {
  matches: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onSavePointsUser: PropTypes.func.isRequired,
  activeItem: PropTypes.object
};


export default ResultadosList;
