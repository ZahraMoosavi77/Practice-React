import React, { useState , useEffect } from 'react'
import { useParams , useNavigate , Link } from 'react-router-dom';
import axios from 'axios';

export  function Read() {

    const {id} = useParams();
    const navigate = useNavigate()
    const [data,setData] =useState([])

    useEffect(()=>{
        
        axios.get(" http://localhost:3000/users/" + id )
        .then(res=>(setData(res.data)))
        .catch(err=>console.log(err))

    },[])
  return (
    <div>
       
            <div className='card'>
              <h5> Student Information</h5>
                
                
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <Link to='/'> Back</Link>
            </div>

         
    </div>
  )
}
