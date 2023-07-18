import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios'
import {Form , Button} from '../export'





export  function Update() {
    const {id}= useParams();

   
    const[inputData,setInputData] = useState({
        id:id,
         name:'',
         email:'',
         number:''
    })

    useEffect(()=>{
        console.log(id);
        axios.get(" http://localhost:3000/users/" + id )
        .then(res=>(setInputData(res.data)))
        .catch(err=>console.log(err))

    },[])


    const navigate = useNavigate();
    const handleSubmit = function(event) {
        event.preventDefault();
        axios.put(" http://localhost:3000/users/" + id, inputData)
        .then(res =>{
            alert("data update succussfully")
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
    <div>
        
        <div>
        <Form onSubmit={handleSubmit} onchangeemail={onChangeHandlerEmail} 
        onchangename={onChangeHandlerName} onchangenumber={onChangeHandlerNumber}  type={{email:'email', text:'text',number:'number'}}
          value={{ id: inputData.id , name: inputData.name , email: inputData.email , number: inputData.number}} text={'Update'}
          name ={{email:'email', Name:'name',number:'number'}}
          color={'black'} backgroundcolor={'white'}
        
        
          /> 

          

        {/* how write well, yek functin bara hamashon , behtar dadn props? */}

       
               

                   
        
        
    </div>
        {/* <div>

            
            <div>
                <form  onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="ID">ID</label>
                        <input type="number"  disabled name='ID' onChange={e=>setInputData({...inputData, name:e.target.value})} value={inputData.id}/>

                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text"  name='name' onChange={e=>setInputData({...inputData, name:e.target.value})} value={inputData.name}/>

                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' onChange={e=>setInputData({...inputData,email:e.target.value})} value={inputData.email} />

                    </div>
                    <div>
                        <label htmlFor="number">Number:</label>
                        <input type="number" name='number' onChange={e=>setInputData({...inputData,email:e.target.value})} value={inputData.number} />

                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div> */}
    </div>
  )
}
