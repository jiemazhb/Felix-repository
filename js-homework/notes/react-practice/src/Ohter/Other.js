import React from 'react'
import SelectAllForm from './SelectAllForm'
import ShoppintCart from './ShoppintCart'
import LiveCoding from './LiveCoding'
import Tiktactoe from './Tiktac'
import MyHoc from './HOC practice/HigherOrderComp'
import OriginalComp from './HOC practice/OriginalComp'
import CallCustomHook from './Custom Hook/CallCustomHook'
import { Provider } from 'react-redux'
import MyComponent from './Redux/MyComponent'
import MyContext from './Context&Reducer/MyContext'
import ExampleComp from './Context&Reducer/ExampleComp'

export default function Other() {

  const EnhanceComp = MyHoc(OriginalComp);

  return (
    <div>
        {/* <h1>All the selected Items</h1>
        <SelectAllForm/>
        <h1>Shopping Cart</h1>
        <ShoppintCart/>
        <h1>Tik Tac toe</h1>
        <Tiktactoe/>
        <h1>Live Coding </h1>
        <LiveCoding />
        <h1>HOC</h1>
        <EnhanceComp caller = "Tina"/> 
        <h1>Custom Hook</h1>
        <CallCustomHook/> */}

        <MyContext>
            <ExampleComp/>
        </MyContext>
          <hr/>
        <MyComponent />
    </div>
  )
}
