import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import themeObjectContent from "./util/theme";
import "./App.css";

// MUI stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages
import home from './pages/home';
import markdownEditorAndPreview from "./pages/markdownEditorAndPreview";


const theme = createMuiTheme(themeObjectContent);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="page-container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route
                exact
                path="/editor-preview"
                component={markdownEditorAndPreview}
              />
            </Switch>
          </div>
        </Router>
     </MuiThemeProvider>
    );
  }
}

export default App;

