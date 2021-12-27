import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Registration from '../components/auth/AuthComponent';

const AuthContainer = (props) => {
  return <Registration />;
};
export default withRouter(connect(null, null)(AuthContainer));
