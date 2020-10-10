import React,{useContext,useEffect} from 'react'
import {Context} from '../pages/markdownEditorAndPreview'


function HtmlEditor(){
let {state:content} = useContext(Context)

return <div  dangerouslySetInnerHTML={{__html: content}}/>
}

export default HtmlEditor