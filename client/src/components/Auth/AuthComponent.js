import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import './/style.css';
import validationRegSchema from '../../services/validation/authValidation.js';

const Registration = ({ changeHandler, handleSubmit }) => {
  return (
    <>
      <h1 className="login-form">Registration</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationRegSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          dirty,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="login-form" onSubmit={handleSubmit}>
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
              {touched.username && errors.username && (
                <p className="errors-message">{errors.username}</p>
              )}
              <p>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </p>
              {touched.email && errors.email && (
                <p className="errors-message">{errors.email}</p>
              )}
              <p>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // autoComplete="current-password"
                />
              </p>
              {touched.password && errors.password && (
                <p className="errors-message">{errors.password}</p>
              )}
              <p>
                <TextField
                  type="Password"
                  name="confirmPassword"
                  label="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </p>
              {touched.password && errors.password && (
                <p className="errors-message">{errors.password}</p>
              )}
              <p className="btn">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // disabled={!dirty || !isValid}
                  onClick={changeHandler}
                >
                  Sign Up
                </Button>
              </p>
              <Link to="/">Have an account?</Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
