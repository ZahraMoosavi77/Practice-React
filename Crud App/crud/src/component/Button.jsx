import React from 'react'
import './Button-create.css'

export function Button({text,color,backgroundcolor}) {
  return (
    <button className='Button' style={{color:color , backgroundColor:backgroundcolor}}>{text}</button>
  )
}
