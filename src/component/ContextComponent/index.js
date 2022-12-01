import {useState, createContext, useContext} from "react";
import GetComponent from "./GetComponent";
export const UserContext = createContext();

const ContextComponent = () =>{
    
    //React’s useContext hook makes it easy to pass data 
    //throughout your app without manually passing props down the tree.

    const[user, setUser] = useState("Manoj");
    return(
        <UserContext.Provider value={user}>
            <h1>useContext</h1>
            <SecondComponent/>
        </UserContext.Provider>
    )
    
}

const SecondComponent = () =>{
    return(
        <div>
            <ThirdComponent/>
        </div>
    )
}

const ThirdComponent = () =>{
    return(
        <div>
            <GetComponent/>
        </div>
    )
}

const FourthComponent = () =>{
    const user = useContext(UserContext);
    return(
        <div>
            <h1>Welcome {user}!</h1>
        </div>
    )
}

export default ContextComponent;