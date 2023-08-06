import { useState, useEffect } from 'react';

export function App() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000);
            return () => clearInterval(interval); // clear-up function
        }
        return undefined;

    }, [isRunning]);


    return (
        <div className='app'>

            <div className="time-circle">
                <div className="time">
                    {seconds}
                </div>
            </div>

            <div className="buttons">
                {isRunning
                    ? (
                        <button className='play-pause' onClick={() => setIsRunning(false)}>
                            <i className='fa fa-pause fa-2x' />
                        </button>
                    )
                    : (
                        <button className='play-pause' onClick={() => setIsRunning(true)} >
                            <i className='fa fa-play fa-2x' />
                        </button>
                    )
                }

                <button
                    disabled={!isRunning}
                    className='reset'
                    onClick={() => {
                        setIsRunning(false);
                        setSeconds(0);
                    }}>
                    Reset
                </button>
            </div>

        </div>
    )
}

