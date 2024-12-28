import React, { createContext, useReducer } from 'react'

const MyContext = createContext()

const initialVal = {
    question : [],
    score : 0,
    final : 0
}

function reducer(preState, action) {
    switch(action.type){
        case "increment":
            return {...preState, score : preState.score + 1}
        case "total":
            return {...preState, final : preState.final + preState.score}
        default: 
            return preState;
        }
}


export default function MyProvider({children}) {
    const [obj, trigger] = useReducer(reducer, initialVal)
    
    const doSomeThing = () => {
        trigger({type : "increment"})
        // something else api calls etc
        trigger({type : "total"})
    }

    // const doSomeThing2 = (){
    
    // }

    return (
    <MyContext.Provider value={{obj, doSomeThing}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext}


