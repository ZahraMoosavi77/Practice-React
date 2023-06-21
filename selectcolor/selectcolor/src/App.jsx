import React from "react";
import Select from "./component/Select";
import Box from "./component/Box";
import  { useState } from 'react'


const App = () => {
	
	const [color,setColor] = useState('');
	
    const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
		
		 setColor(event.target.value);
	}
	return (
		<>
			<Select onOptionChangeHandler={onOptionChangeHandler}/>
      		
			<Box color ={color}/>
		</>
	);
};

export default App;
