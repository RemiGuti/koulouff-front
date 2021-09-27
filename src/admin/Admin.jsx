import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDay from "./AdminDay.jsx"

function Admin() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/planning')
        .then((res) => res.data)
        .then((data) => setDays(data))
    }, [])

    return (
        <div>
             {days.map((day) => (
                <div key={day.id} className="planning">
                    <AdminDay day={day}/>
                </div>
            ))}
        </div>
    )
}

export default Admin
