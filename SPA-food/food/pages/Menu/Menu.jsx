import React from 'react'
import './Menu.css'
import {data} from'../../src/data'
import {Card} from '../../src/export'
import { Link } from 'react-router-dom'

export  function Menu() {
  return (
    <div className='menu'>
        <div className="menu__card">
            {data.map(item =>{
                
             return(
                <div key={item.id}>
                     <Link to={`${item.id}`}> <Card {...item}/> </Link>
                     

                </div>
               


             )})}
        </div>
        
    </div>
  )
}
