import React from 'react'
import './Button.css'

export default function Button({text}) {
  return (
    <button className='button' type='submit' style={{pointerEvents:"cursor", background:"black" , color:"white" ,width:"150px" , fontsize:'larger'}}>{text}</button>
  )
}
