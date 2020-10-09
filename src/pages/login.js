import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppLogo from "../images/logo.png";
// import { Link } from "react-router-dom";




// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import theme from "../util/theme";


const styles = (theme) => ({
  ...theme.palette.primary.main,
  logo: {
    margin: "20px auto 20px auto",
    width: "100px",
  },
  formWrapper: {
    textAlign: "center",
    marginTop: "5%",
  },
  loginTitle: {
    margin: "40px auto 10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  circleProgress: {
    position: "absolute",
    color: theme.palette.dark,
  },
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  handleSubmit = (event) => {
    // const {
    //   match: { params },
    //   history,
    // } = this.props;
    event.preventDefault();
   // Add your code here
  //  ...    
  // history.push("/editor-preview");
  };
   
  

  render() {
    const { classes, loading } = this.props;
    return (
      <Grid container className={classes.formWrapper}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppLogo} alt="markdown" className={classes.logo} />
          <Typography variant="h2" className={classes.loginTitle}>
            Login with GitHub
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <Button
              variant="contained"
              color={theme.palette.secondary.main}
              className={classes.button}
              disabled={loading}
              startIcon={
                <Avatar
                  src={"http://pngimg.com/uploads/github/github_PNG87.png"}
                />
              }
            >
              {loading && (
                <CircularProgress
                  size={30}
                  className={classes.circleProgress}
                />
              )}
              Login
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);
