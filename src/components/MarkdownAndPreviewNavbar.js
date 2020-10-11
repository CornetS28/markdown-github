import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../App";
import goBack from "../images/arrow-left.svg";


// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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

 class MarkdownAndPreviewNavbar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar>
          <Toolbar className={classes.root}>
            {/* TODO */}
            <Button className={classes.button}>Write to preview in HTML</Button>
           
            <Button
              component={Link}
              to="/login"
              className={classes.button3,classes.button2}
              startIcon={
                <Avatar
                  src={"http://pngimg.com/uploads/github/github_PNG87.png"}
                />
              }
              
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