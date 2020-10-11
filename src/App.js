import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { initialState, reducer } from "./store/reducer";
import themeObjectContent from "./util/theme";
import "./App.css";

// MUI stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages
import home from './pages/home';
import login from "./pages/login";
import markdownEditorAndPreview from "./pages/markdownEditorAndPreview";


export const AuthContext = createContext();

const theme = createMuiTheme(themeObjectContent);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
      >
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className="page-container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route
                  exact
                  path="/editor-preview"
                  component={markdownEditorAndPreview}
                />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </AuthContext.Provider>
    );
  }


export default App;
