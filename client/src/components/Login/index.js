import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './style.css';
import validationLogSchema from '../../services/validation/loginValidation.js';

const Login = ({ handleSubmitBtn }) => {
  return (
    <>
      <h1 className="login-form">Log in</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationLogSchema}
        onSubmit={handleSubmitBtn}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form className="login-form">
            <div>
              <p className="username">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Your nickname"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>
              </p>
              {touched.username && errors.username ? (
                <div className="red-error">{errors.username}</div>
              ) : null}
              <p>
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </p>
              {touched.email && errors.email ? (
                <div className="red-error">{errors.email}</div>
              ) : null}
              <p>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </p>
              {touched.password && errors.password ? (
                <div className="red-error">{errors.password}</div>
              ) : null}
              <p className="btn">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Enter
                </Button>
              </p>
              <Link to="/registration">Create new account</Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
Login.propTypes = {
  onhandleSubmit: PropTypes.func,
  onhandleSuccess: PropTypes.func,
};

export default Login;
