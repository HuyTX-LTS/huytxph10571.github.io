import React from "react";

function Timer() {
    const [countDown, setCountDown] = React.useState(180);

    React.useEffect(() => {
        const timerID = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerID);
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    );
}

export default Timer;