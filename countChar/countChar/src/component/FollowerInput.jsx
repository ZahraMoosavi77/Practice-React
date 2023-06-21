import { useState } from "react";
import Input from "./Input";
import Text from "./Text";

function FollowerInput(){
    
    const [characterCount , setCharacterCount] = useState(0);
  
    const count =(e) =>{
        setCharacterCount(e);
    } 



    return(
      <div>
        <Input onCount ={count}/>
        <Text characterCount={characterCount}/>
      </div>
    )
}

export default FollowerInput;