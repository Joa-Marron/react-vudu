import React from 'react'
import './Title.css'

const Title = (props) => {
    return (<div className='title container-fluid'>
      <h1 className='styleTitle'>{props.title}</h1>
    </div>
  
    )
  }
  
  export default Title;