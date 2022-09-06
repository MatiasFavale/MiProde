import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as playerActions from "../../redux/actions/player/playerActions";
import * as pointActions from "../../redux/actions/point/pointActions";
import PropTypes from "prop-types";
import PlayerModalPage  from "./PlayerModalPage";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManagePlayerModal({players, points,point={}, loadPlayers,loadPoints, savePoint, userLogin, changePoint,history,  ...props}) {
  const [player, setPlayer] = useState({...props.player});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    loadPlayers(userLogin)
    .catch(error =>{
      alert("loading players failed " + error);
    });
     
    
    if(points.length === 0){
      loadPoints(userLogin)
      .catch(error =>{
        alert("loading point failed " + error);
      });
    }
  }, [props.player]);

  function handleChange(event){
    const {name, value} = event.target;
    //point[name]= value; 
    changePoint(points, name, value);
    setPlayer(prevPlayer => ({
        ...prevPlayer,
        [name]: value
    })) 
  }

  function handleSave(event){
    event.preventDefault();
    setShow(false);
    setSaving(true);
    var oContext = this;
    debugger;
    savePoint(userLogin,player,true).then(() => {      
        loadPoints(userLogin)
        .catch(error =>{
          alert("loading point failed " + error);
        });
        toast.success("player Success.");
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
  const handleShow = () =>{
      setShow(true);
  } 

  return players.length === 0 || points.length === 0 ? (
        <Spinner />
    ) : (
      <PlayerModalPage         
        player={point}
        habilitado={points[0].habilitado}
        players={players}
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
ManagePlayerModal.propTypes = {
    players: PropTypes.array.isRequired,
    points: PropTypes.array.isRequired,
    point: PropTypes.object.isRequired,
    loadPlayers: PropTypes.func.isRequired,
    loadPoints: PropTypes.func.isRequired,
    savePoint:PropTypes.func.isRequired,
    changePoint:PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
  //const slug = ownProps.player.params.slug;  
  debugger;
  var oPoint = {};
  console.log(state.players);
  if(state.points.length > 0){
    const aPoint = [...state.points, {...[0], playerSelect:state.points[0].playerSelect}]
    oPoint = aPoint[1];
  }
  return {
    players: state.players,    
    points: state.points,
    point: oPoint,
    userLogin:state.userLogin
  };
}

const mapDispatchToProps = {  
    loadPlayers: playerActions.loadPlayers,
    savePoint: pointActions.savePoint,
    loadPoints: pointActions.loadPoint,
    changePoint: pointActions.changePoint
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePlayerModal);