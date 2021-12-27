import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/login/LoginComponent';
import { withRouter } from 'react-router-dom';
import { requestLogin, successLogin, failLogin } from '../actions/index.js';

const LoginContainer = (props) => {
  const { requestLogin, successLogin, failLogin } = props;
  console.log(props);

  const handleRequestLogin = (event) => {
    requestLogin(event.target.value);
  };

  const handleSuccessLogin = (event) => {
    successLogin(event.target.value);
  };

  const handlefailLogin = (event) => {
    failLogin(event.target.value);
  };

  return (
    <Login
      loginRequest={handleRequestLogin}
      loginSuccess={handleSuccessLogin}
      loginFail={handlefailLogin}
    />
  );
};

const mapStateToProps = (state) => ({
  username: state.LoginReducer.username,
  email: state.LoginReducer.email,
  password: state.LoginReducer.password,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogin: (value) => dispatch(requestLogin(value)),
    successLogin: (value) => dispatch(successLogin(value)),
    failLogin: (value) => dispatch(failLogin(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
);
