import { Outlet } from "react-router-dom";
import NeedyComp_A from "./NeedyComp_A";
import RenderedProps from "./RenderedProps";
const RenderProps=()=>{
    return <div>
        <h1>Render props</h1>
        <RenderedProps render={(currentTime,setCurrentTime)=>{return <NeedyComp_A currentTime={currentTime} setCurrentTime={setCurrentTime}/>}}/>
    </div>
}

export default RenderProps;