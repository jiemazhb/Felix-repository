import React, { useEffect, useState } from 'react'

export default function HigherOrderComp(MyComponent) {
    
    return function InternalHoc({caller}){
        const[userInfo, setUserInfo] = useState(null)   

        useEffect(() => {
            
            const getData = async () => {
                
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {method : "GET"})
                    
                    if(response.ok){
                        const data = await response.json()
                        
                        setUserInfo(data)
                        
                    }else{
                        console.log("http erro");
                    }

                } catch (error) {
                    console.warn(`error -> ${error}`);
                }

            }

            getData()

        },[])

        return (
            <>
                {caller? (<div>the caller is {caller}</div>) : 
                (<div>anonymous caller</div>)}
                
                {
                userInfo ? (<MyComponent data = {userInfo}/>) 
                : 
                (<div>nothing here</div>)
                }
            </>
        )

    }
}