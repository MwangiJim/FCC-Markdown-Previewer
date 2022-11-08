import React from 'react'
import {useSelector} from 'react-redux'
const MarkDown = () => {
    const{markdownText}=useSelector((state)=>state.mKdownReducer);
    //console.log(markdownText)
  return (
    <div className='markdown_section'>
        <div className='top__section'>
            <span className='red'></span>
            <span className='orange'></span>
            <span className='yellow'></span>
        </div>
        <div className='display__section'>
            <h1>{markdownText.Title}</h1>
            <p>{markdownText.Paragraph}</p>
            <h5>{markdownText.Text}</h5>
        </div>
    </div>
  )
}

export default MarkDown