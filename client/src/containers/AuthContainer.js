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

  // const { requestAuth } = props;
  // console.log(props.username, 'props-reg');

  // const [form, setForm] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const changeHandler = (event) => {
  //   // requestAuth(event.target.value);
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   console.log(form, 'form');
  //   // console.log(event.target.value, 'ev');
  //   if (event.target.value) {
  //     requestAuth(form);
  //   }
  // };

  // const changeHandler = (event) => {
  //   event.preventDefault();
  //   console.log('btn-reg');
  //   navigate('/');
  // };

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
