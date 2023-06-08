import React from 'react'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Btn from '../Btn/Btn'
import './Description.css'
export default function Description() {
  return (
    <div className='description'>
        <Title/>
        <Text/>
        <div className='description__btn'>
            <Btn text = "SHARE"/>
            <Btn text = "LEARN MORE"/>
        </div>
        

    </div>
  )
}
