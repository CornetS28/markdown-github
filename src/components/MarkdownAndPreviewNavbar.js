import React, { Component } from 'react';

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class MarkdownAndPreviewNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            {/* TODO */}
            <Button color="inherit">Markdown Icons goes here</Button>
            <Button color="inherit">Upload GitHub File</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MarkdownAndPreviewNavbar;
