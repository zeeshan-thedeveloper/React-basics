import { useState } from "react";
import MyContext from "./MyContext";


const Component_A=()=>{
    return <div>
         <MyContext.Consumer>
        {(value)=>{
            return <div>
                <h1>Comp A : {value}</h1>
            </div>
        }}
        </MyContext.Consumer>
    </div>
}
const Component_B=()=>{
    return <div>
        <MyContext.Consumer>
        {(value)=>{
            return <div>
                <h1>Comp B : {value}</h1>
            </div>
        }}
        </MyContext.Consumer>
    </div>
}

const ContextExample=()=>{
    const [name,setName]=useState("zee");

    return <div>
        <h1>ContextExample</h1>
        <MyContext.Provider value={name}>
            <Component_A/>
            <Component_B/>
        </MyContext.Provider>
        
    </div>
}

export default ContextExample;