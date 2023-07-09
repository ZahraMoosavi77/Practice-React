import { useState } from 'react'
import {Header, Footer, Home,About,Contact,Menu,MainCard} from "./export"
import {Routes,Route} from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <div>
      
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/menu/:id'element={<MainCard/>}/>
          {/* <Route path='*' element={<NotFound/>} /> */}

      </Routes>      
      <Footer/>
    </div>
  )
}

export default App
