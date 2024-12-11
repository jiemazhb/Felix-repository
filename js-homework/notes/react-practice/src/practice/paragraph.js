import React, { useState } from 'react'

export default function Paragraph() {

    const [isShowing, setisShowing] = useState(false);
    const [title, setTitle] = useState("hidden");

    const controlText = ()=>{
        isShowing === false ? setisShowing(true) : setisShowing(false);
        title === "hidden" ? setTitle("showing") : setTitle("hidden");
    }

  return (
    <>
        <button className='controlBtn' onClick={controlText}>{title}</button>

        <div>
            <p hidden = {isShowing}>Props (short for properties) are immutable data passed from a parent component to a child component. They are used to configure a child component or pass data to it.</p>
        </div>
    </>
  )
}
