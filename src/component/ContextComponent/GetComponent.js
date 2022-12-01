import { useContext } from "react";
import { UserContext } from ".";
const GetComponent = ()=>{
    const user = useContext(UserContext);
    return(
        <div>
                {user}
        </div>
    )
}

export default GetComponent;