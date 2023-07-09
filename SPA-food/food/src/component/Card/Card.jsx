import React from 'react'
import './card.css'

export  function Card({image,title,description,name}) {
    // console.log(image);
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={image} alt={name}/>
      
      </div>
      <div className='card__title'>
              <h3>{title}</h3>
      </div>

      <div className="card__description">
              <p>{description}</p>
      </div>
        
        


        
    </div>
  )
}
