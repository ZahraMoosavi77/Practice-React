import React from 'react'
import './Form.css'
import '../Input/Input'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Form() {
    const onClickAddHandler=(e)=>{
        e.preventDefault();}
  return (
    // style={{display:'flex',gap:'16px'}}
   <form className='form' onSubmit={onClickAddHandler} > 
        
       
            <Input type="text" placeholder='Name'   />
            <Input type="phone" placeholder='  Phone' />
            <Input type="text" placeholder='  Message'   />
            <Button text={'Send Message'}/>
            
   </form>
    
     
     
    
    
  )
}
