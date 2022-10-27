//Seccion imports
import React from "react";
import { connect } from "react-redux";
import * as rankingsActions from "../../redux/actions/ranking/rankingActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RankingsList from "./RankingsList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

class RankingsPage extends React.Component {
  state = {
    redirectToAddCoursePage:false,
    errors:{},
    initialState:0,
    endState:10
  };
  componentDidMount(){
    const {rankings,  actions,  userLogin, history} = this.props;
    if(userLogin.message === "Success"){
      actions.loadRankings(userLogin)
      .catch(error =>{
        alert("loading ranks failed " + error);
      });  
    }else{
      history.push("/");
    }
  }

  onNext = () => {
    var  endState  = this.state.endState;
    endState = endState + 10;
    var  initialState  = this.state.initialState;
    initialState = initialState + 10;
    this.setState({ endState:endState }) 
    this.setState({ initialState:initialState }) 
  }
  onBack = () => {
    var  endState  = this.state.endState;
    var  initialState  = this.state.initialState;
    endState = endState - 10;    
    initialState = initialState - 10;
    this.setState({ endState:endState }) 
    this.setState({ initialState:initialState }) 
  }

  render() {
    return (
      <>
        <h2>Rankings Usuarios</h2>  
        {this.props.loading ? (
          <Spinner/>
        ) : (          
          <>
            {this.props.rankings !== undefined || this.props.rankings.length > 0 ? (
              <>
                <RankingsList  rankings={this.props.rankings.slice(this.state.initialState,this.state.endState)}
                  errors={this.state.errors} onNext={this.onNext.bind(this)} 
                  onBack={this.onBack.bind(this)} 
                  visibleNext={this.props.rankings.length > this.state.endState ? true : false}
                  visibleBack={this.state.initialState === 0 ? false : true}/>
              </>              
            ) : (          
              <Spinner/>
              
            )}
          </>
          
        )}        
      </>        
    );
  }
}

//Seccion PropTypes
//this.props
RankingsPage.propTypes = {
  rankings: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,  
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  return { 
    rankings: state.rankings,
    userLogin:state.userLogin,
    loading:state.apiCallsInProgress > 0
  };
}


function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadRankings: bindActionCreators(rankingsActions.loadRanking, dispatch)
    }
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(RankingsPage);