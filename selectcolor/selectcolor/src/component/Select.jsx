
import Box from './Box';

export default function Select({onOptionChangeHandler}) {
    
   

    const options =['red', 'orange', 'blue', 'black', 'pink'];


       

    
  return (
    <div>
        <center>

        
            <select onChange={onOptionChangeHandler}>

                <h3> color box</h3>

                <option> Please choose one color </option>
                {options.map((option,index) =>{
                    return <option key={index}>
                        {option}
                    </option>
                })}

            </select>

            

        </center>

        

    </div>
  )
}
