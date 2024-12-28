import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { firstReducer, secondReducer } from './MySlice';

export default function MyComponent() {
    const counterVal = useSelector(state => {return state.slice1})
    const dispatch = useDispatch(); 

    function handleClickPlus(){
        dispatch(firstReducer())
    }

    function handleClickMinus(){
      dispatch(secondReducer())
  }
  return (
    <div>
        <h1>Redux</h1>
        <h1>counter {counterVal}</h1>
        <button onClick={handleClickPlus}>加 1</button>
        <button onClick={handleClickMinus}>减 1</button>
    </div>
  )
}
