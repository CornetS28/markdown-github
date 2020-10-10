import React, {createContext,useReducer } from 'react';
import reducer from '../util/reducer'
// Components
import MarkdownAndPreviewNavbar from "../components/MarkdownAndPreviewNavbar";
import SlateEditor from '../components/SlateEditor'
import HtmlEditor from '../components/HtmlEditor'
// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.palette.primary.main,
  root: {
    flexGrow: 1,
  },
  markdownWrapper: {
    backgroundColor: theme.palette.primary.contrastText,
    height: "calc(100vh - 75px)",
    overflowY:'scroll'
  },
  previewWrapper: {
    backgroundColor: theme.palette.secondary.light,
    overflowY:"scroll",
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
    paddingTop:"3em"
  },
  markdownContent: {
    width: "98%",
    height: "100%",
   
    border: 0,
    outline: "none",
  
  },
});


  export const Context = createContext()
 function MarkDownEditorAndPreview(props) {
  
  const [state,dispatch] = useReducer(reducer,'')
     const { classes } = props;
    return (
      <Context.Provider value = {{state,dispatch}}>
        <MarkdownAndPreviewNavbar />
        <Grid container className={classes.editotAndPreviewContainer}>
          <Grid item sm={6} xs={12} className={classes.markdownWrapper}>
          <div className = {classes.markdownContent}>
           <SlateEditor/>
           </div>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.previewWrapper}>
            <div className={classes.previewContent}>
              <HtmlEditor/>
            </div>
          </Grid>
        </Grid>
      </Context.Provider>
    );
  }


export default ((withStyles)(styles)(MarkDownEditorAndPreview));
