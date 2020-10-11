import React from "react";
import { Link } from "react-router-dom";

import goBack from "../images/arrow-left.svg";
import Logout from "./logout";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    marginRight: 13,
  },
  button3: {
    color: theme.palette.primary.contrastText,
  },
  goBackImg: {
    color: theme.palette.primary.contrastText,
    width: "20px",
  },
}));

const MarkdownAndPreviewNavbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.root}>
          <Button component={Link} to="/" className={classes.button}>
            <img src={goBack} alt="markdown" className={classes.goBackImg} />
          </Button>
          <Logout />
          <Button
            component={Link}
            to="/login"

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

export default MarkdownAndPreviewNavbar;