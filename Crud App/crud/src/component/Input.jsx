import React from 'react'
import './Input.css'

export  function Input({type,name,onchange,lable,value}) {
  return (
                  <div className='input'>
                        <label htmlFor={name}>{lable}</label>
                        <input type={type} name={name} onChange={onchange} value={value}/>

                    </div>
  )
}
