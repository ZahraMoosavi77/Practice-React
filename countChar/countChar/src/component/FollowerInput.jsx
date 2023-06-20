import { useState } from "react";

function FollowerInput(){
    
    const [characterCount , setCharacterCount] = useState(0);
  




    return(
        <div>
            <form >

              <input
               type="text"
               onChange={(e) => {
                setCharacterCount(e.target.value.length);
                
                }} />

            </form>
            
            <p>Character count : {characterCount} </p>

        </div>
    )
}

export default FollowerInput;