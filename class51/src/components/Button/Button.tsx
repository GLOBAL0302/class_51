import React from "react";
import {BtnFunc} from "../../types";

const Button:React.FC<BtnFunc> = ({setNumbers}) => {

  const randomNumber = ()=>{
    const newAllNumbers:number[] = [];
    while (newAllNumbers.length < 5){
      const newNum = Math.floor(Math.random() * (36 - 5) + 5);
      if (!newAllNumbers.includes(newNum)) newAllNumbers.push(newNum);
    }

    setNumbers(newAllNumbers.slice().sort((a, b) => a - b));
  };

  return (
    <div>
      <button className='btn btn-success p-4 fw-bolder rounded-4' onClick={()=>randomNumber()}>New Numbers</button>
    </div>
  );
};

export default Button;