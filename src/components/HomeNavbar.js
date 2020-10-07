import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class HomeNavbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="home-nav-container">
          <Button color="inherit" component={Link} to="/editor-preview">Start Writing</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HomeNavbar;
