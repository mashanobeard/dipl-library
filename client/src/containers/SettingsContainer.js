import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestUpdateUser, requestUpdatePic } from '../actions/index';
import SettingsPage from '../components/Account/index.js';

const SettingsPageContainer = (props) => {
  const { username, email, requestUpdateUser, requestUpdatePic } = props;
  console.log(props);

  const [pic, setPic] = useState(props.pic);

  const handleSetImage = (event) => {
    const files = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      setPic(reader.result);
      requestUpdatePic(reader);
    };
  };

  const handleUpdate = (values) => {
    const { username, email, pic } = values;
    requestUpdateUser({
      username,
      email,
      pic,
    });
  };
  const settingsProps = {
    username,
    email,
    pic,
    handleUpdate,
    handleSetImage,
  };

  return <SettingsPage {...settingsProps} />;
};

const mapStateToProps = (state) => ({
  username: state.settings.username,
  email: state.settings.email,
  pic: state.settings.pic,
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateUser: (user) => dispatch(requestUpdateUser(user)),
  requestUpdatePic: (data) => dispatch(requestUpdatePic(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPageContainer);
