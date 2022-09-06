//Seccion imports
import React from "react";
import { connect } from "react-redux";
import * as matchesActions from "../../redux/actions/fixture/fixtureActions";
import * as teamsActions from "../../redux/actions/fixture/teamsActions";
import * as predictionActions from "../../redux/actions/fixture/predictionActions";
import PropTypes from "prop-types";
import FixtureBreadcrumb from "../common/FixtureBreadcrumb";
import { bindActionCreators } from "redux";
import FixtureList from "./FixtureList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

class FixturePage extends React.Component {
  state = {
    redirectToAddCoursePage:false,
    errors:{}
  };
  componentDidMount(){
    const {matches, teams, predictions, actions, userLogin, activeItem, activegroup} = this.props;
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
    
    //if(predictions.length === 0){
      actions.loadPrediction(userLogin)
      .catch(error =>{
        alert("loading prediction failed " + error);
      });
    //}   
  }


  handleItemChanged = (match, event) => {
    debugger;
    match[event.target.name] = event.target.value;
    this.props.actions.changeMatch(match,this.props.matches, this.props.predictions);
  }

  handleSavePrediction = match => {
    
    this.props.actions.savePrediction(this.props.userLogin, match, this.props.matches, this.props.predictions)
    .then(success=>{
      toast.success("prediction saved");
    })
    .catch(error => {
      toast.error("Fallo el grabado, reintente. ", error.message, {autoClose: false});
      this.props.actions.loadMatches(this.props.userLogin, "GRU")
      .catch(error =>{
        alert("loading matches failed " + error);
      });
      this.props.actions.loadPrediction(this.props.userLogin)
      .catch(error =>{
        alert("loading prediction failed " + error);
      });
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
    this.props.actions.loadPrediction(this.props.userLogin)
    .catch(error =>{
      alert("loading prediction failed " + error);
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
            <FixtureList  matches={this.props.matches}
              errors={this.state.errors}
              onChange={this.handleItemChanged.bind(this)}
              onSaveClick={this.handleSavePrediction.bind(this)}
              activeItem={this.props.activegroup} />
          </>
        )}        
      </>        
    );
  }
}

//Seccion PropTypes
//this.props
FixturePage.propTypes = {
  matches: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  predictions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,  
  loading: PropTypes.bool.isRequired,
  activegroup: PropTypes.object.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  debugger;
  console.log(state.teams);
  console.log(state.matches);
  console.log("state.predictions");
  console.log(state.predictions);
  return {    
    matches: 
      state.teams.length === 0 ? [] : state.matches.map(match => {
        var predictionMatch = undefined;
        var sPrediccionTeamOne = "";
        var sPrediccionTeamTwo = "";
        var sFase = "";
        if(state.predictions.length > 0){
          predictionMatch = state.predictions.find(a => a.match === match.code);
        }
        if(predictionMatch === undefined){
          if(match.PrediccionTeamOne !== undefined){
            sPrediccionTeamOne = match.PrediccionTeamOne;
          }
          if(match.PrediccionTeamTwo !== undefined){
            sPrediccionTeamTwo = match.PrediccionTeamTwo;
          }
        }else{
          sPrediccionTeamOne = predictionMatch.PrediccionTeamOne;
          sPrediccionTeamTwo = predictionMatch.PrediccionTeamTwo;
        }
        if(match.change === "1"){
          sPrediccionTeamOne = match.PrediccionTeamOne;
          sPrediccionTeamTwo = match.PrediccionTeamTwo;
        }       
        if(sPrediccionTeamOne === undefined){
          sPrediccionTeamOne= "";
        }
        if(sPrediccionTeamTwo === undefined){
          sPrediccionTeamTwo= "";
        }
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
        GolEquipoL: sGolOne,
        GolEquipoV: sGolTwo,
        PrediccionTeamOne: sPrediccionTeamOne.toString(),
        PrediccionTeamTwo: sPrediccionTeamTwo.toString(),
        nameInpL: "prediccionL_" + match.code ,
        nameInpV: "prediccionV_" + match.code ,
        Group: sFase,
        Fecha: match.date + " " + match.time
      };
    }),
    teams: state.teams,
    predictions: state.predictions,
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
      changeMatch: bindActionCreators(matchesActions.changeMatch, dispatch),
      savePrediction: bindActionCreators(predictionActions.savePrediction, dispatch),
      loadPrediction: bindActionCreators(predictionActions.loadPrediction, dispatch),
      changeGroup: bindActionCreators(matchesActions.changeGroup, dispatch)
    }
      
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

/*
<TableFixture  matchesTab={matches}
          errors={errors}
          onChange={onChange}
          onSaveClick={onSaveClick} />
*/

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(FixturePage);