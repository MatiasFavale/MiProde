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
    errors:{}
  };
  componentDidMount(){
    const {rankings, actions,  userLogin} = this.props;
        
      actions.loadRankings(userLogin)
      .catch(error =>{
        alert("loading ranks failed " + error);
      });  
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
                <RankingsList  rankings={this.props.rankings}
                  errors={this.state.errors}/>
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
  loading: PropTypes.bool.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  debugger;
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