import React, { useState, useEffect } from "react";
import './/App.css';

function SRAMission() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    return (
        <div className="header">

            <img src="/img/logo.jpg" alt="" align="left" />
            <p className="Time">
                {formatTime(time)}
            </p>
            <div className="body" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                <p style={{ margin: '0 auto' }}>The Shirley Ryan Abilitylab is a rehabilitation hospital <br /> where I focus on brain recovery.</p>
            </div>
        </div>
    );
}

export default SRAMission;