
import './App.css'

import {Home,Create,Update,Read} from './export'
import{Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <div>

      <Routes>

         
         

          <Route path='/' element={<Home/>}/>;
          <Route path='/create' element={<Create/>}/>;
          <Route path='/update/:id' element={<Update/>}/>;
          <Route path='/read/:id' element={<Read/>}/>;
          
      </Routes>

    </div>
  )
}

export default App
