import React from 'react'
import SelectAllForm from './SelectAllForm'
import ShoppintCart from './ShoppintCart'
import LiveCoding from './LiveCoding'
import Tiktactoe from './Tiktac'
export default function Other() {
  return (
    <div>
        <h1>All the selected Items</h1>
        <SelectAllForm/>
        <h1>Shopping Cart</h1>
        <ShoppintCart/>
        <h1>Tik Tac toe</h1>
        <Tiktactoe/>
        <h1>Live Coding </h1>
        <LiveCoding />
    </div>
  )
}
