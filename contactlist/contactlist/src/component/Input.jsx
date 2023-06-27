import './Input.css'
 function Input({placeholder,onChange,value,type}){
    console
   return(
    <div>
         <input className='input' type={type}  placeholder={placeholder} onChange={onChange} value={value} style={{width:'100%',marginRight:"6px"}} />
           
    </div>
   
   )

    
 }

 export default Input