import React, { useState } from 'react'

export default function UnclickableBtn() {
    
    const [btnStatus, setbtnStatus] = useState(false);



    const whenMoveIn = () =>{
        setbtnStatus(true);
    }

    const whenLeaving = () => {
        setbtnStatus(false);
    }

    return (
    <>
        <button className='btn' disabled = {btnStatus} onMouseEnter={whenMoveIn} onMouseLeave={whenLeaving}>hover button</button>
    </>
  )
}
