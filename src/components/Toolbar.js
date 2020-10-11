import React from 'react';
import {  useSlate } from "slate-react";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';

let ToolBar = ()=>{

const editor = useSlate()

function bold(){
    editor.insertText('**bold**')
    
}
function italics(){
    editor.insertText('*italics*')
    
}
function h1(){
    editor.insertText('\n'+'# h1')
    
}

function h2(){
    editor.insertText('\n'+'## h2')
    
}
function h3(){
    editor.insertText('\n'+'## h3')
    
}
function ul(){
    editor.insertText('- List item')
    
}
function ol(){
    editor.insertText('1. List item')
    
}
function quote(){
    editor.insertText('> Blockquote')
    
}
function code(){
    editor.insertText('`code`')
    
}
function link(){
    editor.insertText('[text](linkURL)')
    
}
function image(){
    editor.insertText('![alt](imageURL')
    
}

return (<ButtonGroup id="group" style={{marginBottom:'2em',}}>
<Button variant="contained" onClick={bold}>B</Button>
<Button variant="contained" onClick={italics}>/</Button>
<Button variant="contained" onClick={h1}>H1</Button>
<Button variant="contained" onClick={h2}>H2</Button>
<Button variant="contained" onClick={h3}>H3</Button>
<Button variant="contained" onClick={ul}>UL</Button>
<Button variant="contained" onClick={ol}>OL</Button>
<Button variant="contained" onClick={quote}>&quot</Button>
<Button variant="contained" onClick={code}>CODE</Button>
<Button variant="contained" onClick={link}>LINK</Button>
<Button variant="contained" onClick={image}>IMAGE</Button>

</ButtonGroup>)

}
export default ToolBar