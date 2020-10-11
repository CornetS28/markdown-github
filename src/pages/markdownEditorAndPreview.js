import React, { Component } from 'react';
import MDEditor from "@uiw/react-md-editor";

// Components
import MarkdownAndPreviewNavbar from "../components/MarkdownAndPreviewNavbar";
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from "../components/MarkdownPreview";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.palette.primary.main,
  editotAndPreviewContainer: {
    width: "calc(100% - 0%)",
  },
  editotAndPreviewShow: {
    width: "calc(100% - 0%)",
    marginTop: "-1%",
  },
  previewContent: {
    backgroundColor: theme.palette.secondary.light,
  },
});


class markdownEditoAndPreview extends Component {
  
  render() {
     const { classes } = this.props;
    return (
      <div>
        <MarkdownAndPreviewNavbar />
        <Grid container className={classes.editotAndPreviewContainer}>
          <div className={classes.editotAndPreviewShow}>
            <MDEditor
              className={classes.previewContent}
              value={MarkdownEditor}
              previewOptions={{ renderers: MarkdownPreview }}
            />
          </div>
        </Grid>
      </div>
    );
  }
}

export default ((withStyles)(styles)(markdownEditoAndPreview));
