import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  ...theme.palette.primary.main,
  button: {
    color: theme.palette.primary.contrastText,
    fontSize: "20px",
  },
});

class HomeNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar>
        <Toolbar className="home-nav-container">
          <Button
            className={classes.button}
            component={Link}
            to="/editor-preview"
          >
            Start Writing
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ((withStyles)(styles)(HomeNavbar));
