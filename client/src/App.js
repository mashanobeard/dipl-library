import React from 'react';
import './App.css';

import Login from './components/login/LoginComponent';
import Registration from './components/auth/AuthComponent.js';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';

function App() {
  const routes = ['/Login', '/Registration'];
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Tabs value={value} onChange={handleTabs}>
            <Tab
              label="Login"
              //value={routes[0]}
              component={Link}
              to={routes[0]}
            />
            <Tab
              label="Registartion"
              // value={routes[1]}
              component={Link}
              to={routes[1]}
            />
          </Tabs>
        </AppBar>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
