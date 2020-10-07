import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import home from './pages/home';
import markdownEditorAndPreview from "./pages/markdownEditorAndPreview";

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;

