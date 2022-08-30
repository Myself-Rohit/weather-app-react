import React, { useState } from "react";

function Time () {
    let startTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(startTime);

    setInterval(() => {
       let currtTime = new Date().toLocaleTimeString();
       setTime(currtTime) 
    }, 1000)
    return (
        <>
            <p>{time}</p>
        </>
)
}
export default Time;