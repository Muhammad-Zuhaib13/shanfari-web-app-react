import React from 'react'
import "./style.css"
const Heading = (props) => {
    const {titleText, textAlign="center", fontColor="#ffffff"} = props
  return (
    <div className='heading-container' style={{textAlign:textAlign, color:fontColor}}>
      <h2>{titleText}</h2>
    </div>
  )
}

export default Heading
