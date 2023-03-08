import React, {useState, useEffect} from "react";

function Chrono(){
    const [state, setstate] = useState({date : new Date()});

    function tick(){
        setstate({date : new Date()});
    }

    useEffect(()=>{
        const timerID = setInterval(() => {
            tick();
        }, 1000);

        return ()=>{
            clearInterval(timerID);
        }
    }, [state]);

    return (
        <div>
            {state.date.toLocaleTimeString()}
        </div>
    )

}
export default Chrono;