
import { useState } from "react";
const RenderPropsFunc = (props) => {
  //Define funtionalities
  const [isLogedIn, setIsLogedIn] = useState("Yes its loged in from render prosp");
  const callTheLoginFunc = () => {
    alert("Loging from render props ");
  };

  //return the render funtion
  return <>
  {props.render(isLogedIn,callTheLoginFunc)}
  </>
};

export default RenderPropsFunc;
