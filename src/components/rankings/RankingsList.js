import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";
import Button from 'react-bootstrap/Button';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const RankingsList = ({ rankings ,  errors = {}, onNext, onBack, visibleNext, visibleBack}) => (
  <>
  
    <table className="table table-striped table-bordered table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Usuario</th>
          <th>Puntos</th>
          <th>Jugador Elegido</th>
          <th>Campeon Elegido</th>
        </tr>
      </thead>
      <tbody>
        {      
        rankings.map(userRank => {
          var sCode = userRank.Code;
          return (
            <tr key={userRank.Code}>    
              <td>{userRank.Position}</td>           
              <td>{userRank.User}</td> 
              <td>{userRank.Points}</td> 
              <td>{userRank.Player}</td> 
              <td>{userRank.Team}</td> 
              
            </tr>
          );
        })}
      </tbody>
    </table>
    <br></br>
    <Button hidden={!visibleBack} className="btnBack" onClick={onBack} variant="secondary"><BsFillArrowLeftCircleFill /></Button> 
    <Button hidden={!visibleNext} className="btnNext" onClick={onNext} variant="secondary"><BsFillArrowRightCircleFill /></Button> 
  </>
  
);

RankingsList.propTypes = {
  rankings: PropTypes.array.isRequired,
  errors: PropTypes.object
};


export default RankingsList;
