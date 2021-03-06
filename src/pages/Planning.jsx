import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DayCard from '../components/DayCard.jsx';
import "./Planning.css"

function Planning() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/planning')
        .then((res) => res.data)
        .then((data) => setDays(data))
    }, [])


    return (
        <div className="Planning">
            {days.map((day) => (
                <div key={day.id} className="planning">
                    <DayCard day={day}/>
                </div>
            ))}
        </div>
    )
}

export default Planning
