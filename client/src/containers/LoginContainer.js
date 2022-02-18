import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login/index.js';
import { requestLogin } from '../actions/index.js';
import { useNavigate } from 'react-router-dom';

const LoginContainer = ({ requestLogin, username, email }) => {
  let navigate = useNavigate();

  const handleSubmit = (values, event) => {
    requestLogin(values);
    navigate('/settings');
  };
  // const handleRoute = (event) => {
  //   event.preventDefault();
  //   navigate('/settings');
  // };

  console.log(username, 'username');
  console.log(email, 'email');

  return <Login handleSubmitBtn={handleSubmit} />;
};

const mapStateToProps = (state) => ({
  username: state.login.username,
  email: state.login.email,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogin: (value) => dispatch(requestLogin(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

// const handleRoute = (event) => {
// event.preventDefault();
//   navigate('/main');
// };

// const [user, setUser] = useState({
//   username: '',
//   email: '',
//   password: '',
// });

// const handleChange = (event) => {
//   setUser({ ...user, [event.target.name]: event.target.value });
//   console.log(user, 'user');
//   if (event.target.value) {
//     requestLogin(user);
//   }
// };

// const handleSuccess = () => {
//   // event.preventDefault();
//   console.log('btn');
//   history.push('/Login/Success');
// };
