import { useState } from "react";

const RenderedProps = (props) => {
    const [currentTime, setCurrentTime] = useState("This is current time from render props");
    return <>{props.render(currentTime, setCurrentTime)}</>;
};

export default RenderedProps;