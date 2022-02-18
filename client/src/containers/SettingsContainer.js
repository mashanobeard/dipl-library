import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/index';
import { logOutUser } from '../actions';

import { requestUpdateUser } from '../actions/index';
import SettingsPage from '../components/Account';

const SettingsPageContainer = (props) => {
  const { username, email, requestUpdateUser } = props;
  console.log(props);

  const handleUpdate = (values) => {
    const { username, email } = values;
    requestUpdateUser({
      username,
      email,
    });
  };
  const settingsProps = {
    username,
    email,
    handleUpdate,
  };

  console.log(username, 'username');

  return <SettingsPage {...settingsProps} />;
};

const mapStateToProps = (state) => ({
  username: state.settings.username,
  email: state.settings.email,
  // pic: state.user.pic,
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateUser: (user) => dispatch(requestUpdateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPageContainer);
