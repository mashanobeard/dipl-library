import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login/index.js';
import { requestLogin } from '../actions/index.js';
import { useNavigate } from 'react-router-dom';

const LoginContainer = ({ requestLogin, token }) => {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    requestLogin(values);
  };

  useEffect(() => {
    if (token) {
      navigate('/settings');
    }
  }, [token]);

  return <Login handleSubmitBtn={handleSubmit} />;
};

const mapStateToProps = (state) => ({
  token: state.login.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogin: (value) => dispatch(requestLogin(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
