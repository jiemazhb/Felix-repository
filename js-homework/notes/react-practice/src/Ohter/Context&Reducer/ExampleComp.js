import React, { useContext } from 'react'

import { MyContext } from './MyContext';

export default function ExampleComp() {
    const { obj, doSomeThing } = useContext(MyContext);

  return (
    <div>
        <h1>Context & useReducer</h1>
        <h1>Score: {obj.score}</h1>
        <h2>Final: {obj.final}</h2>

        <button onClick={doSomeThing}>Increment & Total</button>
    </div>
  )
}
