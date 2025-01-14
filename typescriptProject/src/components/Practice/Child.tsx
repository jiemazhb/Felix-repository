import React, { useMemo } from "react";
interface Visitor{
    role : string,
    name : string,
    position : string
}

interface PacticeObj{
    visitor : Visitor
}
function Dashboard (obj  : PacticeObj) {

    console.log(obj);
    

  return (<div>
        <h2>Dashboard component</h2>
  </div>) 
};

export default Dashboard