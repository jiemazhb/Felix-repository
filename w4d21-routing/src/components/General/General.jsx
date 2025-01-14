import React from 'react'
import { Outlet } from 'react-router-dom'

export default function General(obj) {

  const {person, career, school} = obj;
  
  return (
    <div>
      <ul>
        <li>{person.name}</li>
        <li>{career}</li>
        <li>{school}</li>
      </ul>
    </div>
  )
}
