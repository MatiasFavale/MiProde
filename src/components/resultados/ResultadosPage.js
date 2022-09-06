//Seccion imports
import React from "react";
import { connect } from "react-redux";
import * as matchesActions from "../../redux/actions/fixture/fixtureActions";
import * as teamsActions from "../../redux/actions/fixture/teamsActions";
import * as resultadosActions from "../../redux/actions/fixture/resultadosActions";
import * as resultadosPointsActions from "../../redux/actions/fixture/savePointsActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ResultadosList from "./ResultadosList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";
import FixtureBreadcrumb from "../common/FixtureBreadcrumb";

class ResultadosPage extends React.Component {
  state = {
    redirectToAddCoursePage:false,
    errors:{}
  };
  componentDidMount(){
    const {matches, teams,  actions,  userLogin, activeItem, activegroup} = this.props;
    //if(matches.length === 0){
      actions.loadMatches(userLogin, "GRU")
      .catch(error =>{
        alert("loading matches failed " + error);
      });
    //}

    actions.changeGroup(activeItem);
    
    if(teams.length === 0){
      actions.loadTeams(userLogin)
      .catch(error =>{
        alert("loading teams failed " + error);
      });
    }  
  }
  handleItemChanged = (match, event) => {
    debugger;
    match[event.target.name] = event.target.value;
    match.winner = "PPP";
    this.props.actions.changeMatch(match,this.props.matches);
  }

  handleSaveResultados = match => {
    
    this.props.actions.saveResultados(this.props.userLogin, match, this.props.matches)
    .then(success=>{
      toast.success("Resultados Grabados");
    })
    .catch(error => {
      toast.error("Resultados failed. ", error.message, {autoClose: false});
    });
  }

  handleSavePointsResultados = match => {
    
    this.props.actions.saveResultadosPoints(this.props.userLogin, match, this.props.matches)
    .then(success=>{
      toast.success("Puntos X Resultados Grabados");
    })
    .catch(error => {
      toast.error("Puntos X Resultados ", error.message, {autoClose: false});
    });
  }

  handleSaveDisabled = match => {
    
    this.props.actions.saveDisabledMatch(this.props.userLogin, match, this.props.matches)
    .then(success=>{
      toast.success("Deshabilitacion Exitosa");
    })
    .catch(error => {
      toast.error("Deshabilitacion failed. ", error.message, {autoClose: false});
    });
  }

  onCLickChange = (fase,event) =>{
    event.preventDefault();
    this.props.activeItem.grupo = false;
    this.props.activeItem.octavos = false;
    this.props.activeItem.cuartos = false;
    this.props.activeItem.semifinal = false;
    this.props.activeItem.final = false;
    var sFase = "GRU";
    if(fase === "grupos"){
      this.props.activeItem.grupo = true;
      sFase = "GRU";
    }else if(fase === "octavos"){
      sFase = "OCT";
      this.props.activeItem.octavos = true;
    }else if(fase === "cuartos"){
      this.props.activeItem.cuartos = true;
      sFase = "CUA";
    }else if(fase === "semifinal"){
      this.props.activeItem.semifinal = true;
      sFase = "SEM";
    }else if(fase === "final"){
      this.props.activeItem.final = true;
      sFase = "FIN";
    }
    this.props.actions.changeGroup(this.props.activeItem);
    this.props.actions.loadMatches(this.props.userLogin, sFase)
    .catch(error =>{
      alert("loading matches failed " + error);
    });
  }

  render() {
    return (
      <>
        <h2>Matches</h2>        
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <>
            <FixtureBreadcrumb onCLickChange={this.onCLickChange.bind(this)}
              activeItem={this.props.activegroup} errors={this.state.errors}/>
            <ResultadosList  matches={this.props.matches}
              errors={this.state.errors}
              onChange={this.handleItemChanged.bind(this)}
              onSaveClick={this.handleSaveResultados.bind(this)}
              onDisableClick={this.handleSaveDisabled.bind(this)}
              onSavePointsUser={this.handleSavePointsResultados.bind(this)}
              activeItem={this.props.activegroup} />
          </>
        )}        
      </>        
    );
  }
}

//Seccion PropTypes
//this.props
ResultadosPage.propTypes = {
  matches: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,  
  loading: PropTypes.bool.isRequired,
  activegroup: PropTypes.object.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  debugger;
  return {    
    matches: 
      state.teams.length === 0 ? [] : state.matches.map(match => {
      var sFase = "";
      if(match.fase === "GRU"){
        sFase= state.teams.find(a => a.code === match.teamOne).group;
      }else{
        sFase = match.fase;
      }
      var sGolOne="";
      var sGolTwo = "";
      if(match.winner === ""){
        sGolOne = "";
        sGolTwo = "";
      }else{
        sGolOne = match.goalsTeamOne;
        sGolTwo = match.goalsTeamTwo;          
      }
      return {        
        ...match,
        EquipoL: state.teams.find(a => a.code === match.teamOne).name,
        EquipoV: state.teams.find(a => a.code === match.teamTwo).name,
        goalsTeamOne: sGolOne.toString(),
        goalsTeamTwo: sGolTwo.toString(),
        Group: sFase,
        Fecha: match.date + " " + match.time
      };
    }),
    teams: state.teams,
    userLogin:state.userLogin,
    activeItem: {"grupo":true, "octavos":false, "cuartos": false, "semifinal": false, "final":false},
    activegroup: state.activegroup,
    loading:state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadMatches: bindActionCreators(matchesActions.loadMatches, dispatch),
      loadTeams: bindActionCreators(teamsActions.loadTeams, dispatch),
      changeMatch: bindActionCreators(matchesActions.changeResultMatch, dispatch),
      saveResultados: bindActionCreators(resultadosActions.saveResultados, dispatch),
      saveDisabledMatch: bindActionCreators(resultadosActions.saveDisabledMatch, dispatch),
      saveResultadosPoints: bindActionCreators(resultadosPointsActions.loadSavePointsUser, dispatch),
      changeGroup: bindActionCreators(matchesActions.changeGroup, dispatch) 
    }
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(ResultadosPage);