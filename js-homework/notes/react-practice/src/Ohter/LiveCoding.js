//import { useEffect, useState } from "react";
// "https://dummyjson.com/products/search?q=phone"
export default function LiveCoding() {

  const obj = {
    name: "Zhao",
    age: 43,
    address: "11511 Lambert ave",
  };

  const newObj = { ...obj };


  

  

  

  return (
    <>
      <ul>
        {/* {newArr.map((val, index) => {
          return <li key={index}>{val}</li>;
        })} */}
        
        {(() => {
          const { name, age, address } = newObj;
          return (
            <>
              <li>{name}</li>
              <li>{age}</li>
              <li>{address}</li>
            </>
          );
        })()}
      </ul>
    </>
  );
}
