import { useEffect,useState} from "react";
const EffectComponent = () => {
    const[myDate,setMyDate] = useState(0)
    const[myName,setMyname] = useState("Kumar");


    useEffect(()=>{
        document.title=`${myDate} you clicked ${myDate}`
        console.log("Effect Updated");
    },[myDate]);

    const changeMyName = (myName)=>{
        setMyname(myName)
    }

    return(
        <div>
            <h1>useEffect</h1>
            <h1>{myDate}</h1>
            <h1>{myName}</h1>
            <h1>Welcome Test Component</h1>
            <button onClick={()=>changeMyName("Mohan")}>Change My Name</button>
            <button onClick={()=>setMyDate(1)}>Change My Date</button>
        </div>
    )
}

export default EffectComponent;