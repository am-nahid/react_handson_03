import React from "react";


const SecondPage =({data}) =>{
   
    return(
        <>
        <div className="flexProperty">
      <div className="containerTwo">
      {
        data.map((value,index) => {
            return (
                <div className="boxes" key={index}>
                    Name: {value.name} |
                    Department : {value.department} |
                    Rating : {value.rating}
                </div>
            )
        })
      }
      </div>
      </div>
      
      
      </>
    )

}
export default SecondPage;