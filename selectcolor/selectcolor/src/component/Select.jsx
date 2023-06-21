import React from 'react'

export default function Select() {
    
    const options =['red', 'orange', 'blue', 'black', 'pink'];
    const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
    }
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
