import React, {useContext, useMemo, useState, useCallback } from "react";
import { createEditor,Node } from "slate"
import { Editor, Transforms, Text } from "slate";
import { Slate, Editable, withReact,useEditor } from "slate-react";
import {withHistory} from 'slate-history'
import {Context} from '../pages/markdownEditorAndPreview'
import ToolBar from "./Toolbar";

const SlateEditor = () => {
    let {dispatch} = useContext(Context);
    
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ])
  
  let syncHtml = (nodes)=>{
      let toText = nodes.map(n=>Node.string(n)).join('\n')
      dispatch({type:'render',content:toText})
    setValue(nodes)
  }

    return (
      <Slate editor={editor} value={value} onChange={syncHtml}>
        <ToolBar/>
        <Editable />
      </Slate>
    )
  }

  export default SlateEditor