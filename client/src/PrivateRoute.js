import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import isAuthorized from '../src/services/utils/index';

const PrivateRoute = ({ children }) => {
  const auth = isAuthorized();
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {

//   return <Route {...rest} render={(props)=>{
//     if (isAuth){
//       return <Component />
//     }
//     else{
//       return <Navigate to="/" />
//     }
//   }} />;
// };

// export default PrivateRoute;
