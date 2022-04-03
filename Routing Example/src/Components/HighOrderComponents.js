import { Outlet } from "react-router-dom";
import NeedyComp_A from "./NeedyComp_A";

const HighOrderComponents = () => {
  return (
    <div>
      <h1>HighOrderComponents</h1>
      <NeedyComp_A/>
      <Outlet/>
    </div>
  );
};

export default HighOrderComponents;
