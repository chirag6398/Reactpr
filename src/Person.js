import React from "react";
import './Persons.css'
const person=(props)=>{
	return(
      <div>
       <p onClick={props.click}>i am {props.name} and i am {props.age} years old.</p>
      <input onChange={props.changed} type="text" value={props.name} target="_blank"/>
       </div>

	)
}
export default person;