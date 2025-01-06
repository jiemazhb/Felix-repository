import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addList } from './TodoSlice'

export default function ReduxTodoList() {
    const [textVal, settextVal] = useState("")
    const selector = useSelector((selector) => selector.todoReducer)
    const dispatch = useDispatch()

    function handleAdd(){
        if (textVal.trim() === "") return;
        dispatch(addList(textVal))
        settextVal("")
    }

    function handleChange(e){
        settextVal(e.target.value)
    }
  
    return (
    <>
        <input type='text' value={textVal} onChange={(e) => handleChange(e)}/>
        <button onClick={handleAdd}>Redux Add</button>
        <ul>
            {
                selector.list.map((val, index)=>{
                   return <li key={index}>{val}</li>
                })
            }
        </ul>

    </>
  )
}
