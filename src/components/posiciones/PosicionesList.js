import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";
import TablePosiciones from "./TablePosiciones";

const PosicionesList = ({ posicionesteams ,  errors = {}}) => (
  <>

    <div  className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo A</p>
        </div>      
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoA} errors={errors} />
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo B</p>
        </div> 
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoB} errors={errors} />
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo C</p>
        </div>      
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoC} errors={errors} />
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo D</p>
        </div>
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoD} errors={errors} />
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo E</p>
        </div>     
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoE} errors={errors} /> 
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo F</p>
        </div>
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoF} errors={errors} /> 
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo G</p>
        </div>      
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoG} errors={errors} /> 
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="titleTable">
          <p>Grupo H</p>
        </div> 
        <TablePosiciones posicionesteamsGrupos={posicionesteams.GrupoH} errors={errors} /> 
      </div>
    </div>
    <br></br>
  </>
  
);

PosicionesList.propTypes = {
  posicionesteams: PropTypes.object.isRequired,
  errors: PropTypes.object
};


export default PosicionesList;
