import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import AppLogo from "../images/logo.png";
import theme from "../util/theme";
import { AuthContext } from "../App";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
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
}));

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;
  const classes = useStyles();

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        client_id: state.client_id,
        redirect_uri: state.redirect_uri,
        client_secret: state.client_secret,
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("USERDATA:", data)
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Redirect to="/editor-preview" />;
  }

  return (
    <Grid container className={classes.formWrapper}>
      <Grid item sm />
      <Grid item sm>
        <Button
          className={classes.button}
          component={Link}
          to="/editor-preview"
        >
          <img src={AppLogo} alt="markdown" className={classes.logo} />
        </Button>

        <Typography variant="h2" className={classes.loginTitle}>
          Login with GitHub
        </Typography>
        <form noValidate>
          <Button
            variant="contained"
            color={theme.palette.secondary.main}
            className={classes.button}
            disabled={data.isLoading}
            startIcon={
              <Avatar
                src={"http://pngimg.com/uploads/github/github_PNG87.png"}
              />
            }
          >
            {data.isLoading && (
              <CircularProgress size={30} className={classes.circleProgress} />
            )}
            <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
              onClick={() => {
                setData({ ...data, errorMessage: "" });
              }}
            >
           
              <span>Login with GitHub</span>
            </a>
          </Button>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default Login; 


