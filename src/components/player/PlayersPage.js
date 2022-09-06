//Seccion imports
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as playerActions from "../../redux/actions/player/playerActions";
import * as pointActions from "../../redux/actions/point/pointActions";
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
    const {players,  actions, userLogin} = this.props;
    
    if(players.length === 0){
      actions.loadPlayers(userLogin)
      .catch(error =>{
        alert("loading players failed " + error);
      });
    }
  }

  handleItemChanged = (jugador, event) => {
    debugger;
    jugador[event.target.name] = event.target.value;
    this.props.actions.changePlayerGoals(jugador,this.props.players);
  }

  handleSave = jugador => {
    toast.success("player saved");
    this.props.actions.saveGoals(this.props.userLogin, jugador, this.props.players)
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
            onChange={this.handleItemChanged.bind(this)}
            onSave={this.handleSave.bind(this)}
            onDisabledSelect={this.handleSaveDisabled.bind(this)}
            saving={this.props.saving}
            errors={this.props.errors} />
        )}     
      </>        
    );
  }
}

//Seccion PropTypes
//this.props
PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired, 
  history: PropTypes.object.isRequired
};

//Seccion Redux
function mapStateToProps(state, ownProps){
  //const slug = ownProps.player.params.slug;  
  debugger;
  return {
    players: 
      state.players.map(player => {
      return {        
        ...player,
        goals: player.goals.toString()
      };
    }),
    userLogin:state.userLogin
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch),
      saveGoals: bindActionCreators(playerActions.saveGoals, dispatch),
      changePlayerGoals: bindActionCreators(playerActions.changePlayer, dispatch),
      savePointsEnable: bindActionCreators(pointActions.savePointsEnable, dispatch)
    }
      
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);