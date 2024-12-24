import React, { useState, useEffect } from "react";


function WithLoading(WrappedComponent) {

  return function EnhancedComponent(props) {
    const [isLoading, setIsLoading] = useState(true);
    

    
    useEffect(() => {

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 


      return () => clearTimeout(timer); 
    }, []);


    
    if (isLoading) {
      return <div style={{ fontSize: "18px", color: "gray" }}>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithLoading;
