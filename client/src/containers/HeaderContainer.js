import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/index';
import { logOutUser } from '../actions';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = (props) => {
  const { logOutUser, username } = props;
  console.log(props);
  let navigate = useNavigate();

  const handlelogOut = () => {
    logOutUser();
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleClickAccount = () => {
    navigate('/settings');
  };
  console.log(username, 'username');

  return (
    <Header
      username={username}
      // pic={pic}
      handlelogOut={handlelogOut}
      handleClickAccount={handleClickAccount}
    />
  );
};

const mapStateToProps = (state) => ({
  username: state.login.username,
  // pic: state.user.pic,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
