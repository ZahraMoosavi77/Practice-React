import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios'

export  function Update() {
    const {id}= useParams();

   
    const[inputData,setInputData] = useState({
        id:id,
         name:'',
         email:''
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
  return (
    <div>

        <div>
            <div>
                <form  onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="ID">ID</label>
                        <input type="number"  disabled name='ID'  value={inputData.id}/>

                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text"  name='name' onChange={e=>setInputData({...inputData, name:e.target.value})} value={inputData.name}/>

                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' onChange={e=>setInputData({...inputData,email:e.target.value})} value={inputData.email} />

                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}
