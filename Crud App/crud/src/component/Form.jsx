import React from 'react'
import { Input, Button } from '../export'
import './Form.css'


export function Form({onSubmit,onchangename,onchangeemail,onchangenumber,type,value,name,text,color,backgroundcolor}) {
     
  return (
    
  <form onSubmit={onSubmit} className='form'>

        <Input type={type.text}  name={name.Name} onchange={onchangename} lable={'Name:'} value={value && value.name}/>
        <Input type={type.email}  name={name.email } onchange={onchangeemail} lable={'Email:'} value={value &&value.email}/>
        <Input type={type.number}  name={name.number} onchange={onchangenumber} lable={'Number:'} value={value &&value.number}/>
       
        <Button text={text} color={color} backgroundcolor={backgroundcolor}/>

      
  </form>
       
   
  )
}
