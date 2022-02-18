// import React from 'react';

// const SettingsPage = () => {
//   return (
//     <>
//       <h1>Edit your profile</h1>
//     </>
//   );
// };

// export default SettingsPage;

import React from 'react';
import { Formik, Form } from 'formik';

import {
  Avatar,
  Button,
  CardContent,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';

import { useStyles } from './style';
import HeaderContainer from '../../containers/HeaderContainer';
import validationSettingsSchema from '../../validation/settingsValidation';

const SettingsPage = ({ handleUpdate, username, email }) => {
  const classes = useStyles();

  return (
    <>
      <HeaderContainer />
      <div className={classes.block}>
        <Container className={classes.formBlock}>
          <Avatar className={classes.avatarPic} alt="avatar" />
          <Formik
            initialValues={{
              username: username,
              email: email,
            }}
            validationSchema={validationSettingsSchema}
            onSubmit={handleUpdate}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <CardContent>
                  <Typography className={classes.text} variant="h5">
                    Change your profile picture
                  </Typography>
                  <input id="pic" type="file" name="file"></input>
                </CardContent>
                <CardContent>
                  <TextField
                    type="text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></TextField>

                  {touched.username && errors.username ? (
                    <div className={classes.red}>{errors.username}</div>
                  ) : null}
                </CardContent>
                <CardContent>
                  <TextField
                    type="text"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  ></TextField>
                  {touched.email && errors.email ? (
                    <div className={classes.red}>{errors.email}</div>
                  ) : null}
                </CardContent>

                <div className={classes.buttonBlock}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.updateButton}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
};

export default SettingsPage;
