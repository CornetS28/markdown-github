import React, { Component } from 'react';

// Components
import MarkdownAndPreviewNavbar from "../components/MarkdownAndPreviewNavbar";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const styles = (theme) => ({
  ...theme.palette.primary.main,
  root: {
    flexGrow: 1,
  },
  markdownWrapper: {
    backgroundColor: theme.palette.primary.contrastText,
    height: "calc(100vh - 75px)",
  },
  previewWrapper: {
    backgroundColor: theme.palette.secondary.light,
    height: "calc(100vh - 75px)",
  },
  editotAndPreviewContainer: {
    width: "calc(100% - 0%)",
    margin: "auto",
    marginTop: "-13px",
    backgroundColor: "yellow",
  },
  previewContent: {
    padding: "32px",
  },
  markdownContent: {
    width: "98%",
    height: "100%",
    margin: "10px auto auto auto",
    border: 0,
    outline: "none"
  },
});

class markdownEditoAndPreview extends Component {
  
  render() {
     const { classes } = this.props;
    return (
      <div>
        <MarkdownAndPreviewNavbar />
        <Grid container className={classes.editotAndPreviewContainer}>
          <Grid item sm={6} xs={12} className={classes.markdownWrapper}>
            <div>
              <form
                className={classes.markdownContent}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextareaAutosize
                    className={classes.markdownContent}
                    rowsMax={100}
                    placeholder="Write your markdown here..."
                  />
                </div>
              </form>
            </div>{" "}
          </Grid>
          <Grid item sm={6} xs={12} className={classes.previewWrapper}>
            <div className={classes.previewContent}>
              <p> preview content goes here</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ((withStyles)(styles)(markdownEditoAndPreview));
