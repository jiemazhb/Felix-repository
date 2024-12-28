import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {firstReducer} from '../Ohter/Redux/MySlice'
export default function UnclickableBtn() {
    
    const [btnStatus, setbtnStatus] = useState(false);
    const val = useSelector((state) => state.slice1)
    const dispatch = useDispatch()

    const whenMoveIn = () =>{
        setbtnStatus(true);
    }

    const whenLeaving = () => {
        setbtnStatus(false);
    }

    function handlePlus(){
        dispatch(firstReducer())
    }

    return (
    <>
        <h1>REDUX count : {val}</h1>
        <button onClick={handlePlus}>plus 1</button>
        <button className='btn' disabled = {btnStatus} onMouseEnter={whenMoveIn} onMouseLeave={whenLeaving}>hover button</button>
    </>
  )
}
