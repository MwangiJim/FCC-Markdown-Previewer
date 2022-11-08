import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setMarkdown } from '../redux/markdownReducer'

const Previewer = () => {
    const{markdownText}=useSelector((state)=>state.mKdownReducer);
    console.log(markdownText)
    let dispatch = useDispatch();
    const[Form,setForm]=React.useState({
        title:'',
        paragraph:'',
        text:''
    })
//console.log(Form);
    function HandleInput(e){
       setForm((prevForm)=>{
        return{
            ...prevForm,
            [e.target.name]:e.target.value
        }
       })
    }
    function HandleForm(){
        dispatch(setMarkdown({
            Title:Form.title,
            Paragraph:Form.paragraph,
            Text:Form.text
           }))
    }
  return (
    <div className='previewer'>
        <div className='top__section'>
            <span className='red'></span>
            <span className='orange'></span>
            <span className='yellow'></span>
        </div>
        <input
        type={'text'}
         placeholder='This is the Heading'
         value={Form.title}
         name='title'
         onChange={HandleInput}
        />
        <br/>
        <textarea
        type={'text'}
        placeholder='This is a paragraph'
        value={Form.paragraph}
        name='paragraph'
        onChange={HandleInput}
        />
        <br/>
        <input
         type={'text'}
         placeholder='Other Texts'
         value={Form.text}
         name='text'
         onChange={HandleInput}
        />
        <button onClick={HandleForm}>Create</button>
    </div>
  )
}

export default Previewer