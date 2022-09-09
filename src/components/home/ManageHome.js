import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomePage  from "./HomePage";

function ManageHome({history,  ...props}) {
  
  const [show, setShow] = useState(false);
  const [pages, setPages] = useState({"Registro": true, "Puntos":false, "History": "Registro"});

  useEffect(() => {
  }, []);

  const handleNext = () =>{
    setPages({"Registro": false, "Puntos":true, "History": "Registro"});
  } 

  const handleBack = () =>{
    setPages({"Registro": true, "Puntos":false, "History": "Puntos"});
  } 

  const handleClose = () =>{
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