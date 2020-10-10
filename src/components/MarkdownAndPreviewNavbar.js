import React, { Component } from 'react';
import { Link } from "react-router-dom";
// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";

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
    float: "right",
    marginLeft: "auto",
  },
  button3: {
    color: theme.palette.primary.contrastText,
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
            <Button
              component={Link}
              to="/login"
              className={classes.button3}
              startIcon={
                <Avatar
                  src={"http://pngimg.com/uploads/github/github_PNG87.png"}
                />
              }
              className={classes.button2}
            >
              Upload GitHub File
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ((withStyles)(styles)(MarkdownAndPreviewNavbar));
