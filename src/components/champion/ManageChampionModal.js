import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as teamsActions from "../../redux/actions/fixture/teamsActions";
import * as pointActions from "../../redux/actions/point/pointActions";
import PropTypes from "prop-types";
import ChampionModalPage  from "./ChampionModalPage";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageTeamModal({teams, points, point={}, loadTeams, loadPoints, savePoint, userLogin, changePoint, history, ...props}) {
  const [champion, setChampion] = useState({...props.champion});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if(teams.length === 0){
      loadTeams(userLogin)
      .catch(error =>{
        alert("loading champion failed " + error);
      });
    }else{
      setChampion({ ...props.champion});
    }
    
    if(points.length === 0){
      loadPoints(userLogin)
      .catch(error =>{
        alert("loading point failed " + error);
      });
    }
      
  }, [props.champion]);

  function handleChange(event){
    const {name, value} = event.target;
    point[name]= value;
    //changePoint(point);
    setChampion(prevChampion => ({
        ...prevChampion,
        [name]: value
    })) 
  }

  function handleSave(event){
    event.preventDefault();
    setShow(false);
    setSaving(true);
    var oContext = this;
    debugger;
    savePoint(userLogin,champion, false).then(() => {        
        loadPoints(userLogin)
        .catch(error =>{
          alert("loading point failed " + error);
        });
        toast.success("champion Success.");
    }).catch(error => {
        setSaving(false);
        setErrors({onSave: error.message});
    });
  }

  const handleClose = () =>{
    loadPoints(userLogin)
    .then(success =>{
      setShow(false);
    })
    .catch(error =>{
      alert("loading players failed " + error);
    });
  } 

  const handleShow = () => setShow(true);
  return teams.length === 0 || points.length === 0 ? (
        <Spinner />
    ) : (
        <ChampionModalPage 
            champion={point}
            habilitado={points[0].habilitado}
            teams={teams}
            onShow={handleShow}
            onClose={handleClose}
            show={show}            
            onChange={handleChange}
            onSave={handleSave}
            saving={saving}
            errors={errors} />
    )  
}

//this.props
ManageTeamModal.propTypes = {
    teams: PropTypes.array.isRequired,
    points: PropTypes.array.isRequired,
    point: PropTypes.object.isRequired,
    loadTeams: PropTypes.func.isRequired,
    loadPoints: PropTypes.func.isRequired,
    savePoint:PropTypes.func.isRequired,
    changePoint:PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){  
  debugger;
  var oPoint = {};
  if(state.points.length > 0){
    const aPoint = [...state.points, {...[0], teamSelect:state.points[0].teamSelect}]
    oPoint = aPoint[1];
  }
  return {
    teams: state.teams,
    points: state.points,
    point: oPoint,
    userLogin:state.userLogin
  };
}

const mapDispatchToProps = {  
    loadTeams: teamsActions.loadTeams,
    savePoint: pointActions.savePoint,
    loadPoints: pointActions.loadPoint,
    changePoint: pointActions.changePoint
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeamModal);