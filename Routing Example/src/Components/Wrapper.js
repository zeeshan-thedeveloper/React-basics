import { useState } from "react";

function Wrapper(NeedyComp) {

  const UpdatedCom = (props) => {

    const [currentTime, setCurrentTime] = useState("This is current time from HOX");

    //
    return (
      <NeedyComp currentTime={currentTime} setCurrentTime={setCurrentTime} {...props}/>
    );
  };

  return UpdatedCom;
}
    
export default Wrapper