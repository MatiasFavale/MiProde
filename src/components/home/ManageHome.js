import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomePage  from "./HomePage";

function ManageHome({history,  ...props}) {
  
  const [show, setShow] = useState(false);
  const [pages, setPages] = useState({"Registro": true, "Puntos":false, "Prodes": false, "History": "Registro"});

  useEffect(() => {
  }, []);

  const handleNext = () =>{
    if(pages.History === "Registro"){
      setPages({"Registro": false, "Puntos":true, "Prodes": false, "History": "Puntos"});
    }else if(pages.History === "Puntos"){
      setPages({"Registro": false, "Puntos":false, "Prodes": true, "History": "Prodes"});
    }  
  } 

  const handleBack = () =>{
    if(pages.History === "Prodes"){
      setPages({"Registro": false, "Puntos":true, "Prodes": false, "History": "Puntos"});
    }else if(pages.History === "Puntos"){
      setPages({"Registro": true, "Puntos":false, "Prodes": false, "History": "Registro"});
    }   
  } 

  const handleClose = () =>{
    setPages({"Registro": true, "Puntos":false, "Prodes": false, "History": "Registro"});
    setShow(false);
  } 
  const handleShow = () =>{
      setShow(true);
  } 

  return (
      <HomePage  
        onShow={handleShow}
        onClose={handleClose}
        onNext={handleNext}
        onBack={handleBack}
        pages={pages}
        show={show} />
    )  
}

//this.props
ManageHome.propTypes = {
    history: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    init: "inicio"
  };
}

const mapDispatchToProps = {  
   "test": "test"
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageHome);