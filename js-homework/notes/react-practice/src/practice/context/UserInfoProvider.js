import React, { Children, createContext, useReducer } from 'react'

const UserContext = createContext()

const initialVal = {
    name : "Danny",
    age : 23,
    addr : "2222 Peck rd"
}

const names = ["Danny", "Alice", "Bob", "Charlie", "Eve"];

function localReducer(preState, action){
    switch (action.type) {
        case "changeName":
            const randomName = names[Math.floor(Math.random() * names.length)];
            return { ...preState, name: randomName };           
        default:
            return preState;
    }
}

export default function UserInfoProvider({children}) {
  
    const [obj, trigger] = useReducer(localReducer, initialVal)

    function handleUserInfo(){
        trigger({type : "changeName"})
    }

    return (
    <UserContext.Provider value={{obj, handleUserInfo}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext}
