import React from 'react'
import MarkDown from './MarkDown'
import Previewer from './Previewer'
const Home = () => {
  return (
    <div className='markdown'>
        <div className='textbox'>
            <Previewer/>
            <MarkDown/>
        </div>
    </div>
  )
}

export default Home