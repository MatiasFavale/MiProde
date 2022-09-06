import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TableFixture from "./TableFixture";
import TableFixtureOctavos from "./TableFixtureOctavos";
import TableFixtureCuartos from "./TableFixtureCuartos";
import TableFixtureFinals from "./TableFixtureFinals";


const FixtrueList = ({ matches ,  errors = {}, onChange, onSaveClick, activeItem={}}) => (
  <>
    <div hidden={!activeItem.grupo}>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo A</p>
          </div>      
          <TableFixture Group={"A"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo B</p>
          </div>
          <TableFixture Group={"B"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>
      </div>

      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo C</p>
          </div>      
          <TableFixture Group={"C"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo D</p>
          </div>
          <TableFixture Group={"D"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>
      </div>

      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo E</p>
          </div>      
          <TableFixture Group={"E"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo F</p>
          </div>
          <TableFixture Group={"F"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>
      </div>
      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo G</p>
          </div>      
          <TableFixture Group={"G"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="titleTable">
            <p>Grupo H</p>
          </div>
          <TableFixture Group={"H"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
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
          <TableFixtureOctavos OC1={"OC1"} OC2={"OC3"} OC3={"OC5"} OC4={"OC7"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableFixtureOctavos OC1={"OC2"} OC2={"OC4"} OC3={"OC6"} OC4={"OC8"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
          
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
          <TableFixtureCuartos CU1={"CU1"} CU2={"CU3"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableFixtureCuartos CU1={"CU2"} CU2={"CU4"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
          
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
          <TableFixtureFinals FNS={"SF1"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <br></br>
          <TableFixtureFinals  FNS={"SF2"}  matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
          
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
          <TableFixtureFinals FNS={"TP1"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
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
          <TableFixtureFinals FNS={"PP1"} matches={matches} errors={errors} 
            onChange={onChange} onSaveClick={ onSaveClick} activeItem={activeItem} />
        </div>
      </div>
      
      <br></br>
    </div>
    
  </>
  

  
);

FixtrueList.propTypes = {
  matches: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  activeItem: PropTypes.object
};


export default FixtrueList;
