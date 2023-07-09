import React from 'react'
import './Form.css'
import '../Input/Input'
import Input from '../Input/Input'

export default function Form() {
    const onClickAddHandler=(e)=>{
        e.preventDefault();}
  return (
    // style={{display:'flex',gap:'16px'}}
   <form className='form' onSubmit={onClickAddHandler} > 
        
       
            <Input type="text" placeholder='Name'   />
            <Input type="phone" placeholder='  Phone' />
            <Input type="text" placeholder='  Message'   />
            <button  type='submit' style={{pointerEvents:"cursor", background:"black" , color:"white" ,width:"150px" , fontsize:'larger'}}>Send Message</button>
   </form>
    
     
     
    
    
  )
}
