import React, { useEffect, useState } from 'react'
import{Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import { ItemList } from '../component/ItemList';

export  function Home() {
    const [datas,setData]=useState([]);
    const [error , setError] = useState(false)
    const [isLoading , setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() =>{
        const getContactData = async() =>{
            
            try{
                setIsLoading(true)
                const {data} = await axios.get(" http://localhost:3000/users")
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
    
        
        <div className='container' >

            <div className="container__wrapper">
                <div className="header">

                     <h2> Student List</h2>
                      
                    <Link  to={"/create"}>  <button className='button'>Add New Student </button> </Link>
                     
                    
                </div>
          
               

                 <table className='table'>

                    <thead>

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                           
                        </tr>
                    </thead>



                    <tbody>




                    
                       
                   

                    
                    
                           {datas && datas.map((data,i)=>(
                              
                                    // <tr>

                                    //     <td><div className='profile'><img src="assets/imsge/1.jpg" alt="image" /></div></td>
                                    //     <td>{d.name}</td>
                                    //     <td>{d.email}</td>
                                    //     <td>{'00912'}</td>
                                    //     <td>
                                    //         {/* <Link to={`/update/${d.id}`}>Update</Link>
                                    //         <button onClick={e=> handleDelete(d.id)}>Delete</button>
                                    //         <Link to={`/read/${d.id}`}>Read</Link> */}
                                    //     </td>


                                    // </tr>

                                    <ItemList data={data} key={i}/>
                                    
                                    
                               
                           ) )}

                        </tbody>    
                               
                       </table>
                            
                          
                       
                   

            </div>
          
        </div>
  ) 
}
