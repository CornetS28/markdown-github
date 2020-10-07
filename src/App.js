import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import home from './pages/home';
import markdownEditorAndPreview from "./pages/markdownEditorAndPreview";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route
              exact
              path="/editor-preview"
              component={markdownEditorAndPreview}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

