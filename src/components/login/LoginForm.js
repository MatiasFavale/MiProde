import React from "react";
import PropTypes from "prop-types";
import FormTextInput from "../common/FormTextInput";
import PasswordInput from "../common/PasswordInput";

const LoginForm = ({
  user,
  onLogin,
  onChange,
  saving = false,
  onCloseAlert,
  errors = {}
}) => {
  return (
    <form onSubmit={onLogin}>
      <h2>Login Usuario</h2>
      {errors.onLogin && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {errors.onLogin}
          <button onClick={onCloseAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <FormTextInput
        name="email"
        label="Email"
        value={user.email}
        onChange={onChange}
        error={errors.email}
      />
      <PasswordInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}
      />
      <br></br>
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default LoginForm;
