import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const LoginForm = ({
  user,
  onLogin,
  onChange,
  login = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onLogin}>
      <h2>Login Usuario</h2>
      {errors.onLogin && (
        <div className="alert alert-danger" role="alert">
          {errors.onLogin}
        </div>
      )}
      <TextInput
        name="email"
        label="Email"
        value={user.email}
        onChange={onChange}
        error={errors.email}
      />
      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}
      />

      <button type="submit" disabled={login} className="btn btn-primary">
        {login ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.bool
};

export default LoginForm;
