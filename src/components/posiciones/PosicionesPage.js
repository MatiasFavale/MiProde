//Seccion imports
import React from "react";
import { connect } from "react-redux";
import * as posicionesActions from "../../redux/actions/fixture/posicionesActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import PosicionesList from "./PosicionesList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

class PosicionesPage extends React.Component {
  state = {
    redirectToAddCoursePage:false,
    errors:{}
  };
  componentDidMount(){
    const {posicionesteams, actions,  userLogin} = this.props;
        
      actions.loadPosicionesTeams(userLogin)
      .catch(error =>{
        alert("loading teams failed " + error);
      });  
  }

  render() {
    return (
      <>
        <h2>Posiciones</h2>        
        {this.props.loading ? (
          <Spinner/>
        ) : (          
          <>
            {this.props.posicionesteams.GrupoA === undefined ? (
              <Spinner/>
            ) : (          
              <>
                <PosicionesList  posicionesteams={this.props.posicionesteams}
                  errors={this.state.errors}/>
              </>
              
            )}
          </>
          
        )}        
      </>        
    );
  }
}

/*

            <PosicionesList  posicionesteams={this.props.posicionesteams}
              errors={this.state.errors}/>
*/

//Seccion PropTypes
//this.props
PosicionesPage.propTypes = {
  posicionesteams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,  
  loading: PropTypes.bool.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  debugger;
  return { 
    posicionesteams: state.posicionesteams,
    userLogin:state.userLogin,
    loading:state.apiCallsInProgress > 0
  };
}


function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadPosicionesTeams: bindActionCreators(posicionesActions.loadPosicionesTeams, dispatch)
    }
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(PosicionesPage);