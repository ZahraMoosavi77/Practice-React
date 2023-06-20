import { useState } from "react";

function Input({onCount}){
    
    
  




    return(
        <div>
            <form >

              <input
               type="text"
               onChange={(e)=>onCount(e.target.value.length)} />

            </form>
            
            

        </div>
    )
}

export default Input;