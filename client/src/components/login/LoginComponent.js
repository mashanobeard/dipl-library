import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../login/style.css';

const Login = () => {
  <>
    <h1 className="login-form">Log in</h1>
    <Formik>
      <Form className="login-form">
        <div>
          <p className="username">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Your nickname" />
              </Grid>
            </Grid>
          </p>

          <p>
            <TextField id="standard-basic" label="Email" />
          </p>
          <p>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </p>
          <p className="btn">
            <Button variant="contained" color="primary" type="submit">
              Enter
            </Button>
          </p>
          <Link to="/registration">Create new account</Link>
        </div>
      </Form>
    </Formik>
  </>;
};

export default Login;
