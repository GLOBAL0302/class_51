import RandomNumber from "./components/RandomNumber/RandomNumber";
import './App.css';
import Button from "./components/Button/Button";
import React from "react";

function App() {
  const [numbers, setNumbers] = React.useState([5, 11, 16, 23, 32]);

  return (
    <>
      <div className="d-flex flex-column align-items-center gap-5 border border-5 p-5 bg-secondary-subtle">
        <Button setNumbers = {setNumbers}/>
        <div className='d-flex gap-5'>
          {numbers.map((num, index) =>(
            <RandomNumber number={num} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
