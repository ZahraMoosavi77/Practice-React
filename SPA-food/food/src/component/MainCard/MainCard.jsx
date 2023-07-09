import React from 'react'
import {data} from '../../data'
import { useParams } from 'react-router-dom'
import { Card } from '../Card/Card'
import './maincard.css'

export  function MainCard() {
  const param = useParams()
  let list=[]
  let maincard;
  maincard= data.findIndex(item=>param.id==item.id);
  
  return (
    <div className='maincard'>
        <Card  {...data[maincard]} />
        
    </div>
  )
}
