import React, { useState } from "react";



function FirstFunction({onSubmit}) {

  const [formData, setformData] = useState({
    name: "",
    department:"",
    rating:"",
});

  const handleChange = (event) => {
    setformData({...formData, [event.target.name]:event.target.value})
   
  };

  const handleSubmitButton = () =>{
      onSubmit(formData)
      setformData({name: "",
      department:"",
      rating:"",})
      console.log(formData.name, formData.department, formData.rating.length);
      // if(formData.name==="" && formData.department ==="" && formData.rating.length ===0){
      //   isFormEmpty
      // }

  }

 const isFormEmpty = !formData.name || !formData.department || !formData.rating;

  return (
    
    <div className="containerOne">
        <form>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="enter name"
        onChange={handleChange}
        className="myInput"
      />
      <br />
      <label>Department :</label>
      <input
        type="text"
        name="department"
        placeholder="enter department"
        value={formData.department}
        onChange={handleChange}
        className="myInput"
      />
      <br />
      <label>Rating :</label>
      <input
        type="number"
        name="rating"
        value={formData.rating}
        placeholder="enter rating"
        onChange={handleChange}
        className="myInput"
      />
      <br />

      <button onClick={handleSubmitButton} disabled={isFormEmpty} type="button">Submit</button>
      </form>
    </div>
  );
}

export default FirstFunction;
