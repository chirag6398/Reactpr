import React, { Component } from 'react';
import './App.css'
import Person from './Person';
import Radium from "radium";
import Display from "./Displaytime"

class App extends Component {
  state = {
    persons: [{ id: "0", name: "chirag", age: 19 },
    { id: "1", name: "aryan", age: "19" },
    { id: "2", name: "deepak", age: "19" }],
    showPerson: false,
    
  }
  


  toggle = () => {
    const req = this.state.showPerson;
    this.setState({
      showPerson: !req
    });
  }

nameChanged=(event,id)=>{
const pi=this.state.persons.findIndex((p)=>{
  return p.id===id
});
const person=this.state.persons[pi];
person.name=event.target.value;
const persons=[...this.state.persons];
persons[pi]=person;
this.setState({persons:persons})
}
deletePerson=(index)=>{
  console.log(index);
const persons=[...this.state.persons];
persons.splice(index,1);
this.setState({persons:persons})
}

  render() {
   const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    }
    
const btnstyl={
  backgroundColor:"green",
  height:"3vw",
  width:"9vw",
  letterSpacing:"2px",
  borderRadius:"2px solid black",
  boxShadow:"0px 2px 4px #eee",
  cursor:"pointer",
  ":hover":{
    backgroundColor:"yellow",
    textColor:"black"
  }
}
   let persons = null;
  let time=null;
   const displaytime=()=>{
    const dat=new Date();
    time=dat.toLocaleTimeString();
   console.log(time);
   }
   setInterval(displaytime,1000);
    if (this.state.showPerson) {
      persons = (
        <div >
          {
            this.state.persons.map((p,index) => {
              return <Person
                click={this.deletePerson}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event)=>{this.nameChanged(event,p.id)}}
              />
            }

            )
            
          }
        </div>
      )
      btnstyl.backgroundColor="red";
      btnstyl[":hover"]={
        backgroundColor:"salmon",
        textColor:"white"
      }
     
    }
    return (


      <div className="App" style={style}>
        <h1>hey !!</h1>
        
        <Display display={displaytime()}
                 time={time}
        />
        <button onClick={this.toggle} style={btnstyl}>toggle below</button>
        
        {persons}
      </div>

    );
  }

}

export default Radium(App);
