import React, { createContext, useReducer } from 'react'

const todoListContext = createContext()

const initialstate = {
    name : "Danny",
    list : []
}

function reducer(prestate, action){
  switch (action.type) {
    case "addToList": return {...prestate, list : [...prestate.list, action.payload]}
    case "deleteList": return {...prestate, list : prestate.list.filter((val, index) => {return index !== action.payload}
      
    )}
    default:
      return prestate;
  }
}


export default function MyProvider({children}) {
    const [state, trigger] = useReducer(reducer, initialstate)

    function addToList(value){
      trigger({type: "addToList", payload : value})
    }

    function deleteList(index){
      trigger({type : "deleteList", payload : index})
    }

  return (
    <todoListContext.Provider value={{state, addToList, deleteList}}>
        {children}
    </todoListContext.Provider>
  )
}

export {todoListContext}
