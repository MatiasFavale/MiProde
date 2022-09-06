import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as registerActions from "../../redux/actions/login/registerActions";
import PropTypes from "prop-types";
import RegisterForm  from "./RegisterForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function RegisterPage({saveRegister, saveRegisterCode, history, ...props}) {
  const [user, setUser] = useState({...props.user});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
  }, []);

  function handleChange(event){
    const {name, value} = event.target;
    setUser(prevRegister => ({
        ...prevRegister,
        [name]: name === "authorId" ? parseInt(value,10) : value
    })) 
  }
  function handleChangeCode(event){
    
    setUser(prevRegister => ({
        ...prevRegister,
        habilitado: true
    })) 
  }
  function formIsValid() {
    const { name, email, password } = user;
    const errors = {};

    if (!name) errors.name = "nombre is required.";
    if (!email) errors.email = "email is required";
    if (!password) errors.password = "password is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event){
    event.preventDefault();
    if(!formIsValid()) return;
    setSaving(true);
    if(user.habilitado){
      saveRegisterCode(user).then((data) => {
        debugger;
        console.log(data);
        toast.success("User Register and log.");
        history.push("/");
      }).catch(error => {
          setSaving(false);
          setErrors({onSave: error.message});
          toast.success(error.message);
      });
    }else{
      saveRegister(user).then((data) => {
        debugger;
        console.log(data);
        toast.success("Debe introducir el codigo enviado al mail");
        setUser(prevRegister => ({
          ...prevRegister,
          habilitado: true
        })) 
      }).catch(error => {
          console.log(error);
          setSaving(false);
          setErrors({onSave: error.message});
          toast.success(error.message);
      });
    }
    
  }
  return (
    <RegisterForm 
      user={user} 
      errors={errors} 
      onChange={handleChange}
      onChangeCodeAuth={handleChangeCode}
      onSave={handleSave}
      saving={saving}/>
  )
  
}

//this.props
RegisterPage.propTypes = {
  user: PropTypes.object.isRequired,
  saveRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getUserBySlug(register, slug){
    return register.find(user => user.slug === slug) || null
}

function mapStateToProps(state, ownProps){
  const slug = ownProps.match.params.slug;
  
  return {
    user: {email: "", password:"",name:"", codeAuth:"", habilitado:false},
    register: state.register
  };
}

const mapDispatchToProps = {  
  saveRegister: registerActions.saveRegister,
  saveRegisterCode: registerActions.saveRegisterCode
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);