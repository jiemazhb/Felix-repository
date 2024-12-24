import React from 'react'

export default function OriginalComp({data}) {

  return (
    <>
        <h1>original component</h1>
        <ul>
          {
            data.map((person) => {

              const {id, name, username, email, phone} = person
              
              return (
                <li key={id}>
                  <div>{name}</div>
                  <div>{username}</div>
                  <div>{email}</div>
                  <div>{phone}</div>
                </li>
              )
            })

          }  
        </ul>   
    </>
  )
}
