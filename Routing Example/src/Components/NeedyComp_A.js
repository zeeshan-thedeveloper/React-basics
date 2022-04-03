import { useState } from "react";
import Wrapper from "./Wrapper";

function NeedyCom_A(props) {
    const [newTime,setNewTime]=useState("");
    return <div>
        <h1>Needy A : {props.currentTime}</h1>
        <button onClick={()=>{
            props.setCurrentTime("change time")
        }}>Set</button>
    </div>;
}

export default Wrapper(NeedyCom_A);