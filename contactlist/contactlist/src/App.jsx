import { useEffect, useState } from 'react'
import './App.css'
import Input from './component/Input';
import Row from './component/Row';


function App() {
  
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [search,setSearch] = useState('');
  const [persons,setPersons] = useState([])
 
  const onChangeInputNameHandler=(e)=>{
    
    setName(e.target.value)
    

  }

  const onChangeInputEmailHandler=(e)=>{
    
    setEmail(e.target.value);
   


  }

  const onChangeInputPhoneHandler=(e)=>{
    
    setPhone(e.target.value);
   


  }

  const onChangeInputSearchHandler=(e)=>{
    setSearch(e.target.value)
  }

  const onClickAddHandler=(e)=>{
    e.preventDefault();
    if(name.trim() && phone.trim() && email.trim()){
     
    setPersons([...persons,{name:name,phone:phone,email:email,id:persons.length+1}]);
    setEmail('');
    setName('');
    setPhone('');

    }

  }
  

  return (
   
    <div>
     <form  onSubmit={onClickAddHandler}>
      <div>
        
        <Input type= 'text' placeholder=' search'onChange={onChangeInputSearchHandler} value={search} />
      </div >
      <div style={{display:'flex',gap:'16px'}}>
        <Input type="text" placeholder=' name' onChange={onChangeInputNameHandler} value={name}  />
        <Input type="text" placeholder=' phone'onChange={onChangeInputPhoneHandler} value={phone} />
        <Input type="text" placeholder=' email' onChange={onChangeInputEmailHandler} value={email}  />
        <button  type='submit' style={{pointerEvents:"cursor"}}> Add</button>
      

      </div>
    
      <table style={{listStyle:'none',width:"100%",borderCollapse:'collapse' }}>
        
            <Row key={0} Name={'Name'} email={'Email'} phone={'Phone'} isTh={true}/>
     
        
        
        {persons
        .filter((person)=>{return(person.name.includes(search))})
        .map((person)=>{
             return(
               
                  <Row key={person.id} Name={person.name} email={person.email} phone={person.phone} isTh={false}/>
               
                    
               
              
          

             )
         
        })}
      </table>
      
     </form>
      
    </div>
  )
}

export default App
