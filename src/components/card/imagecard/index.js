import React from 'react'
import "./style.css"
const ImageCard = (props) => {
  const {imgData} = props;
  const {src, className, alt} = imgData
  return (
    <div className={`img-card ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageCard
