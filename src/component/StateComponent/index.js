import { useState } from "react"

let initialCount = 0;
const StateComponent = () =>{

    const[count,setMyCount] = useState(initialCount)

    const changeMyCount = () => {
        setMyCount(++initialCount)
    }

    return(
        <div>
            <h1>useState</h1>
            <h3>{count}</h3>
            <button onClick={()=>changeMyCount()}>Change My Count</button>
        </div>
    )
}

export default StateComponent;