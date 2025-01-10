import React from "react"

interface Props {
    children?: React.ReactNode;
  }

const Parent : React.FC<Props> = ({children}) => {

    return (
        <div>
            parent
            {children}
        </div>
    )
}

export default Parent