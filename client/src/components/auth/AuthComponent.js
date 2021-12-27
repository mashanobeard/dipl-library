import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../auth/style.css';
import axios from 'axios';
import validationRegSchema from '../../validation/authValidatiom';

const Registration = (onSubmit) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPasswird: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const renderError = (message) => <p className="help is-danger">{message}</p>;

  const registerHandler = async () => {
    try {
      await axios
        .post(
          '/api/auth/registration',
          { ...form },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="login-form">Registration</h1>
      <Formik validationRegSchema={validationRegSchema} onSubmit={onSubmit}>
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
                    name="username"
                    onChange={changeHandler}
                  />
                </Grid>
              </Grid>
              <ErrorMessage name="username" render={renderError} />
            </p>

            <p>
              <TextField
                type="email"
                label="Email"
                name="email"
                onChange={changeHandler}
              />
              <ErrorMessage name="email" render={renderError} />
            </p>
            <p>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={changeHandler}
                autoComplete="current-password"
              />
              <ErrorMessage name="password" render={renderError} />
            </p>
            <p>
              <TextField
                type="Password"
                name="password"
                label="Confirm password"
                onChange={changeHandler}
              />
              <ErrorMessage name="confirmPassword" render={renderError} />
            </p>
            <p className="btn">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={registerHandler}
              >
                Enter
              </Button>
            </p>
            <Link to="/login">Have an account?</Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Registration;
