import React from "react"

interface Props {
    children?: React.ReactNode;
  }

const Parent : React.FC<Props> = ({children}) => {
    console.log(children);
    
    return (
        <div>
            parent up
            {children}
            parent down
        </div>
    )
}

export default Parent