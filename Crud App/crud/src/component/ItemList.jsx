import React from 'react'
import './ItemList.css'
import{Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

export function ItemList({data}) {

    function handleDelete(id){
        const confirm = window.confirm('whould you like to delete?')
        if(confirm){


            axios.delete(" http://localhost:3000/users/" +id)
            .then(res =>{
                // alert('delete');
                navigate('/');
               
                
        }).then(window.location.reload())

        
        }

        
        
    }

  return (
    <div>
        <tr>

            <td><div className='profile'><img src="assets/imsge/1.jpg" alt="image" /></div></td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{'00912'}</td>
            <td>
                <Link to={`/update/${data.id}`}>Update</Link>
                <button onClick={e=> handleDelete(data.id)}>Delete</button>
                <Link to={`/read/${data.id}`}>Read</Link>
            </td>


        </tr>
    </div>
  )
}
