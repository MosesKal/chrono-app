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
        <React.Fragment>
            {state.date.toLocaleTimeString()}
        </React.Fragment>
    )

}
export default Chrono;