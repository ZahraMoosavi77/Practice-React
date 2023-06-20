import React from 'react'

export default function Btn({text,onClick}) {
  return (
    <div>
        <button onClick={onClick}  >{text}</button>
    </div>
  )
}
