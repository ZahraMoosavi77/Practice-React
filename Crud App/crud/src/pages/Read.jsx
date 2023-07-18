import React, { useState , useEffect } from 'react'
import { useParams , useNavigate , Link } from 'react-router-dom';
import axios from 'axios';
import './Read.css'
import { Button } from '../export';

export  function Read() {

    const {id} = useParams();
    const navigate = useNavigate()
    const [data,setData] =useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(false)

    useEffect(() =>{
      const getContactData = async() =>{
          
          try{
              setIsLoading(true)
              const {data} = await axios.get(" http://localhost:3000/users/"+ id)
              setData(data)
              setIsLoading(false)
              
              // setError(false)
              
          }catch (e){
              setError(true)
              console.log(e);
              
          }
      }
      getContactData();
  },[])


  
   if(isLoading){
      return ( <p> Loading</p>)
   }

   if (error){
    return( <p> eroor darim</p>)
}

  return (
    <div className='card'>
       
          
            <h5> Student Information</h5>
                
                
            <p> {`ID: ${data.id}`}</p>
            <p>{`NAME:${data.name}`}</p>
            <p>{`EMAIL:${data.email}`}</p>
            <p>{`EMAIL:${data.number}`}</p>
            <Link to='/'> <Button text={'BACK'}/> </Link>
            

         
    </div>
  )
}
