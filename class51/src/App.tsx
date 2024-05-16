import RandomNumber from "./components/RandomNumber/RandomNumber";
import './App.css';
import React, {useState} from "react";

function App() {
  const [numbers, setNumbers] = React.useState([5, 11, 16, 23, 32]);

  return (
    <>
      <div>
        <button></button>
        <div className='d-flex gap-5'>
          {numbers.map(num =>(
            <RandomNumber number={num}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
