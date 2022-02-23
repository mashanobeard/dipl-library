import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  InputLabel,
  Menu,
  MenuItem,
  Link,
  Typography,
} from '@material-ui/core';

import useStyles from './style';

import { useSelector } from 'react-redux';

const Header = ({ handlelogOut, handleClickAccount, pic, username }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const isAuth = useSelector((state) => state.Login.isAuth);

  return (
    <div className={classes.root}>
      <AppBar className={classes.color} color="inherit" position="static">
        <Toolbar>
          <Typography className={classes.title}>Library</Typography>

          <div>
            <Button
              color="inherit"
              href="/settings"
              style={{ textTransform: 'none' }}
            >
              {username}
            </Button>
          </div>

          <div>
            <Button color="inherit" href="/main">
              Books
            </Button>
          </div>

          <div>
            <Button color="inherit" href="/">
              Login
            </Button>
          </div>
          <div className={classes.rightToolbar}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Settings
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClickAccount}>My account</MenuItem>
              <MenuItem onClick={handlelogOut}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
