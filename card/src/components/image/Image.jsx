import React from 'react'
import './image.css'

export default function Image(props) {
  return (
    <div className='image'>
        <img  src={props.src}  alt="car" />
    </div>
  )
}
