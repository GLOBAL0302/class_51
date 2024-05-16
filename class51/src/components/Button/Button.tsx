import React from "react";

type Props ={
  numberFunc:Function
}
const Button: React.FC<Props> = ({numberFunc}) => {

  const randomNumber = ()=>{
    let newAllNumbers:number[] = [];
    while (newAllNumbers.length < 5){
      let newNum = Math.floor(Math.random() * (36 - 5) + 5)
      if (!newAllNumbers.includes(newNum)) newAllNumbers.push(newNum)
    }
    numberFunc(newAllNumbers.slice().sort((a, b)=> a - b));
  }

  return (
    <div>
      <button className='btn btn-success p-4 fw-bolder rounded-4' onClick={()=>randomNumber()}>New Numbers</button>
    </div>
  );
};

export default Button;