import React from 'react'
import FetchPost from './FetchPost'
import Btns from './Btns'
import AutoFetch from './AutoFetch'
export default function Day13() {
  return (
    <div>
      <h1>fetch posts from jsonplaceholder by id</h1>
      <FetchPost />
      <hr style={{marginTop: 40, marginBottom: 40}}></hr>
      <h1>Write a counter timer</h1>
      <Btns />
      <hr style={{marginTop: 40, marginBottom: 40}}></hr>
      <h1>Fetch posts variation</h1>
      <AutoFetch/>
    </div>
  )
}
