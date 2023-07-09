import React from 'react';
import './Cards.css';
import {data} from'../../data';
import {Card} from '../../export';
import { Link } from 'react-router-dom';

export  function Cards() {
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
