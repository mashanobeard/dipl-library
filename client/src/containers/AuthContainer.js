import React from 'react';
import { connect } from 'react-redux';
import Registration from '../components/Auth/AuthComponent';

import { requestAuth } from '../actions/index.js';

import { useNavigate } from 'react-router-dom';

const AuthContainer = ({ requestAuth, register }) => {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    requestAuth(values);
    navigate('/');
  };

  return (
    <Registration
      // changeHandler={changeHandler}
      handleSubmit={handleSubmit}
      // changeHandler={changeHandler}
    />
  );
};
const mapStateToProps = (response) => ({
  register: response.register,
  // username: state.Auth.username,
  // email: state.Auth.email,
  // password: state.Auth.password,
  // confirmPassword: state.Auth.confirmPassword,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestAuth: (value) => dispatch(requestAuth(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
