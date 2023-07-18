import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {Form} from '../export'
import './create.css'

export  function Create() {
    const[inputData,setInputData] = useState({
         name:'',
         email:'',
         number:''
    })

    const navigate = useNavigate();
    const handleSubmit = function(event) {
        event.preventDefault();
        axios.post(" http://localhost:3000/users", inputData)
        .then(res =>{
            alert("data post succussfully")
            navigate('/')
        })

    }
    const onChangeHandlerName = function(e){
        setInputData({...inputData, name:e.target.value})

    }

    const onChangeHandlerEmail = (e)=>{
        setInputData({...inputData, email:e.target.value})

    }

    const onChangeHandlerNumber = (e)=>{
        setInputData({...inputData, number:e.target.value})

    }

        
    
  return (
    <div className='create'>

        <div className="create__title">

            <h2>CRUD OPERATIONS</h2>

          
        </div>

        <div className='create__text'>
            <h3> Create</h3>
            <p>Enter Student's Information to create an  account</p>
        </div>
        <Form onSubmit={handleSubmit} onchangeemail={onChangeHandlerEmail} 
        onchangename={onChangeHandlerName} onchangenumber={onChangeHandlerNumber}  type={{email:'email', text:'text',number:'number'}}  
        value={undefined} 
        name ={{email:'email', Name:'name',number:'number'}} text={'SUBMIT'}
        color={'white'} backgroundcolor={' rgb(253,174,1)'}
        /> 

        {/* how write well, yek functin bara hamashon , behtar dadn props? */}

       
               

                   
        
        
    </div>
  )
}
