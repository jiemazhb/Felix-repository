import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {AppDispatch, RootState} from '../../Redux/todoStore'
import {Content, addToList, getAll} from './ListSlice'

 
export default function List(): JSX.Element {
    const [textVal, setTextVal] = useState<string>("")
    const [descriptionContext, setDes] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()
    const selector = useSelector((state : RootState) => state.listStore)
    
    const handleAddToList = () => {
        if(textVal.trim() === "") return
        const obj : Partial<Content> = { task : textVal, completed : false, description : descriptionContext, date: new Date().toDateString()}
        dispatch(addToList(obj))
    }

    useEffect(() => {
        dispatch(getAll())
        setTextVal("")
        setDes("")
    }, [])
    
    console.log(selector);
    if (!selector) {
      return <></>
    }

    return(
        <div style={{margin : "100px"}}>
            <div>
                <input type="text" value={textVal} onChange={(e)=> setTextVal(e.target.value)} placeholder="todo"/>
                <textarea value={descriptionContext} onChange={(e)=>setDes(e.target.value)} placeholder="description"/>
                <button onClick={handleAddToList}>add</button>
            </div>
            <ul>
                {
                    selector.list.map((obj) => {
                        const {id, task, completed} = obj
                        return (
                            <li key={id}>
                                <span style={{marginRight : "30px"}}>{task}</span>
                                <span>{completed ? "to do" : "completed"}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}