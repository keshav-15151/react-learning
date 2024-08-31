import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)   //0 is the default value here

  //let counter = 5;
  const addValue = () => {
    //counter+=1;
    setCounter(counter+=1)
  }

  const remValue = () => {
    
    if (counter==0) {
      setCounter(0); //to avoid negative values
    }
    else setCounter(counter-=1)
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={remValue}>Remove Value {counter} </button>
      <br />
      <h3>Value of counter is {counter}</h3>
    </>
  )
}
export default App
