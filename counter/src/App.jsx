import {useState} from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(5) //we can give any value in the brackets

  // let counter=5;

  const addvalue=()=>{
    if(counter==20) alert("Cannot increment");
    else
      setCounter(counter+1);
  }

  const subvalue=()=>{
    if(counter==0) alert("Cannot decrease");
    else
      setCounter(counter-1);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={subvalue}>Subtract Value {counter}</button>
    </>
  )
}

export default App