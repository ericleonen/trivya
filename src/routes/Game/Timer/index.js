import { useEffect, useState } from 'react';

import './Timer.css';

const Timer = () => {
    const [timer, setTimer] = useState();
    useEffect(() => {
        const t = setTimeout(() => {
            alert('hey');
        }, 60000);

        setTimer(t);

        return clearTimeout(timer);
    }, []);

    return (
        <div className="Timer">
            <div className="timer-outer-bar">
                <div className="timer-inner-bar"></div>
            </div>
        </div>
    );
};

export default Timer;