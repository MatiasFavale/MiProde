import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";

const RankingsList = ({ rankings ,  errors = {}}) => (
  <>
  
    <table className="table table-striped table-bordered table-hover table-dark">
      <thead>
        <tr>
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
              <td>{userRank.User}</td> 
              <td>{userRank.Points}</td> 
              <td>{userRank.Player}</td> 
              <td>{userRank.Team}</td> 
              
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  
);

RankingsList.propTypes = {
  rankings: PropTypes.array.isRequired,
  errors: PropTypes.object
};


export default RankingsList;
