import React, { useState } from 'react'
import Btn from './Btn';
import Text from './Text';

export default function Click() {


    const [number, setNumber] = useState(0) ;
    const clickHandler = () =>{
        setNumber(number + 1)
    }
    
  return (
    

    <div>


        
        <Btn   text = "click" onClick={clickHandler}/>
        {/* <button onClick ={()=> setNumber( number + 1)}> click</button> */}
        <Text context={number}></Text>
    </div>
  )
}
