import React, { Component } from 'react';

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.palette.primary.main,
  root: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.contrastText,
    fontSize: "20px",
  },
  button2: {
    color: theme.palette.primary.contrastText,
    fontSize: "20px",
    float: 'right',
    marginLeft: 'auto',
  },
});

export class MarkdownAndPreviewNavbar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar>
          <Toolbar className={classes.root}>
            {/* TODO */}
            <Button className={classes.button}>Markdown Icons goes here</Button>
            <Button className={classes.button2}>Upload GitHub File</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ((withStyles)(styles)(MarkdownAndPreviewNavbar));
