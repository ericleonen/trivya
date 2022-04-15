import { useEffect, useState } from 'react';

import './Timer.css';

const Timer = ({ setTimeUp }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeUp(true);
        }, 60 * 1000);

        return () => {
            clearTimeout(timer)
        };
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