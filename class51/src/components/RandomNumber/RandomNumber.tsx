import {INumber} from "../../types";
import React from "react";
const RandomNumber: React.FC<INumber> = ({number}) => {
  return (
    <div className="rounded-circle p-4 bg-primary d-flex align-items-center justify-content-between">
      <p className='m-0 fw-bold fs-2' style={{width:"60px", height:"auto", color:"white"}}>{number}</p>
    </div>
  );
};

export default RandomNumber;