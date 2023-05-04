import React, { useState } from "react";
import FirstFunction from "./FirstPage";
import SecondPage from "./SecondPage";

function DataHandler() {
    const [show, setShow] = useState(true)
  const [allFormState, setAllFormState] = useState([]);

  const handleSubmit = (formData) => {
    const tempObj =[...allFormState];
    tempObj.push(formData);
    setAllFormState(tempObj);
    console.log(formData);
    setShow(!show)
  }

  const pageHandler = () => {
      setShow(!show)
  }

  return (
    <div className="containerOne">
      {show ?(
      <FirstFunction onSubmit={handleSubmit} />): (
      <div>
        <SecondPage data={allFormState}/> 
        <button onClick={pageHandler}>Go Back</button>
        </div>)}
      <br/>
      <br/>
    
      
      
    </div>
  );
}

export default DataHandler;
