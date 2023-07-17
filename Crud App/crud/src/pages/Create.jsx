import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export  function Create() {
    const[inputData,setInputData] = useState({
         name:'',
         email:''
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
  return (
    <div>

        <div>
            <div>
                <form  onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text"  name='name' onChange={e=>setInputData({...inputData, name:e.target.value})}/>

                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' onChange={e=>setInputData({...inputData,email:e.target.value})} />

                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
