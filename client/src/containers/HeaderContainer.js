import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/index';
import { logOutUser } from '../actions';
import { useNavigate } from 'react-router-dom';
import {getStorageData, removeStorageData} from "../services/localStorage/localStorage";

const HeaderContainer = (props) => {
  const { logOutUser } = props;
  let navigate = useNavigate();
  const username = getStorageData('token').username;

  const handlelogOut = () => {
    logOutUser();
    removeStorageData('token');
    navigate('/');
  };

  const handleClickAccount = () => {
    navigate('/settings');
  };

  return (
    <Header
      username={username}
      // pic={pic}
      handlelogOut={handlelogOut}
      handleClickAccount={handleClickAccount}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
});

export default connect(null, mapDispatchToProps)(HeaderContainer);
