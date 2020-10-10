
import markedit from 'markdown-it'
let md = new markedit({
    breaks: true
});
 let reducer = (state,action)=>{
    console.log('reducer is called')
    switch(action.type){
        case 'render':
            return md.render(action.content)
        default:
            return md.render('')
    }
}

export default reducer