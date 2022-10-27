import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as teamsActions from "../../redux/actions/fixture/teamsActions";
import * as pointActions from "../../redux/actions/point/pointActions";
import PropTypes from "prop-types";
import ChampionModalPage  from "./ChampionModalPage";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageTeamModal({teams, points, point={}, loadTeams, loadPoints, savePoint, userLogin, changePoint, championFin, resultadoChampion, history, ...props}) {
  const [champion, setChampion] = useState({...props.champion});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if(userLogin.message === "Success"){
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
    }else{
      history.push("/");
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
    
    savePoint(userLogin,champion, false).then(() => {        
        loadPoints(userLogin)
        .catch(error =>{
          alert("loading point failed " + error);
        });
        toast.success("Su Campeon se cargo correctamente!");
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
            errors={errors} 
            championFin={championFin}
            resultadoChampion={resultadoChampion}/>
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
    championFin: PropTypes.string,
    resultadoChampion: PropTypes.number,
    history: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){  
  
  var oPoint = {};
  var sTeamChamp = "";
  var sResultadoChamp = -1;
  if(state.points.length > 0){
    const aPoint = [...state.points, {...[0], teamSelect:state.points[0].teamSelect}]
    oPoint = aPoint[1];
  }

  if(state.teams.length > 0){
    if(state.teams.filter(nfilter=>nfilter.isChampion === true).length > 0){
      sTeamChamp = state.teams.filter(nfilter=>nfilter.isChampion === true)[0].code
    }
  }

  if(sTeamChamp !== "" ){
    if(oPoint.teamSelect !== undefined && oPoint.teamSelect !== ""){
      if(sTeamChamp === oPoint.teamSelect){
        sResultadoChamp = 50;
      }else{
        sResultadoChamp = 0
      }
    }
  }
  return {
    teams: state.teams,
    points: state.points,
    point: oPoint,
    userLogin:state.userLogin,
    championFin: sTeamChamp,
    resultadoChampion: sResultadoChamp
  };
}

const mapDispatchToProps = {  
    loadTeams: teamsActions.loadTeams,
    savePoint: pointActions.savePoint,
    loadPoints: pointActions.loadPoint,
    changePoint: pointActions.changePoint
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeamModal);