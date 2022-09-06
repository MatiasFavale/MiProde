//Seccion imports
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as playerActions from "../../redux/actions/player/playerActions";
import * as pointActions from "../../redux/actions/point/pointActions";
import * as teamsActions from "../../redux/actions/fixture/teamsActions";
import * as campeonActions from "../../redux/actions/campeon/campeonActions";

import PropTypes from "prop-types";
import PlayersList  from "./PlayersList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";

class PlayersPage extends React.Component {
  
  state = {
    redirectToAddCoursePage:false,
    errors:{}
  };
  componentDidMount(){
    const {players,teams, campeon, actions, userLogin} = this.props;
    
    //this.props.setChampionSel({code: ""});
    if(players.length === 0){
      actions.loadPlayers(userLogin)
      .catch(error =>{
        alert("loading players failed " + error);
      });
    }
    if(teams.length === 0){
      actions.loadTeams(userLogin)
      .then(success => {
        console.log(success)
      })
      .catch(error =>{
        alert("loading champion failed " + error);
      });
    }
  }


  handleItemChanged = (jugador, event) => {
    debugger;
    jugador[event.target.name] = event.target.value;
    this.props.actions.changePlayerGoals(jugador,this.props.players);
  }

  handleItemChampionChanged = (event) => {
    debugger;
    this.props.actions.changeChampion(this.props.campeon ,event.target.value);
  }

  handleSave = jugador => {
    toast.success("player saved");
    this.props.actions.saveGoals(this.props.userLogin, jugador, this.props.players)
    .catch(error => {
      toast.error("Delete failed. ", error.message, {autoClose: false});
    });
  }

  handleSaveCampeon = campeon => {    
    this.props.actions.saveChampion(this.props.userLogin, campeon)
    .then(success=>{
      toast.success("Campeon saved");
      this.props.actions.loadTeams(this.props.userLogin)
      .catch(error =>{
        alert("loading teams failed " + error);
      });
    })
    .catch(error => {
      toast.error("Delete failed. ", error.message, {autoClose: false});
    });
  }

  handleSaveDisabled = event => {
    toast.success("Disabled saved");
    this.props.actions.savePointsEnable(this.props.userLogin)
    .catch(error => {
      toast.error("Delete failed. ", error.message, {autoClose: false});
    });
  }  

  render() {
    return (
      <>
        {this.props.players.length === 0 ? (
        <Spinner />
        ) : (
          <PlayersList
            players={this.props.players}   
            teams={this.props.teams}
            onChange={this.handleItemChanged.bind(this)}
            onChangeChampion={this.handleItemChampionChanged.bind(this)}
            onSave={this.handleSave.bind(this)}
            onSaveCampeon={this.handleSaveCampeon.bind(this)}
            onDisabledSelect={this.handleSaveDisabled.bind(this)}
            saving={this.props.saving}
            errors={this.props.errors}
            campeon={this.props.campeon} />
        )}     
      </>        
    );
  }
}

//Seccion PropTypes
//this.props
PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  campeon: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired, 
  history: PropTypes.object.isRequired
};

//Seccion Redux
function mapStateToProps(state, ownProps){
  //const slug = ownProps.player.params.slug;  
  debugger;
  var sChampCode = state.campeon.code;
  state.teams.length === 0 ? sChampCode : state.teams.map(match => {    
    if(state.teams.filter(nfilter=>nfilter.isChampion === true).length > 0){
      sChampCode = state.teams.filter(nfilter=>nfilter.isChampion === true)[0].code;
    }
  });
  return {
    players: 
      state.players.map(player => {
      return {        
        ...player,
        goals: player.goals.toString()
      };
    }),
    teams: state.teams,
    campeon: {code: sChampCode},
      
    userLogin:state.userLogin
    
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch),
      saveGoals: bindActionCreators(playerActions.saveGoals, dispatch),
      changePlayerGoals: bindActionCreators(playerActions.changePlayer, dispatch),
      savePointsEnable: bindActionCreators(pointActions.savePointsEnable, dispatch),
      loadTeams: bindActionCreators(teamsActions.loadTeams, dispatch), 
      changeChampion: bindActionCreators(campeonActions.changeChampion, dispatch),
      saveChampion: bindActionCreators(campeonActions.saveChampion, dispatch)
    }
      
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);