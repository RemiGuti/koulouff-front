import React from 'react'

function AdminDay({day}) {
    return (
        <div>
            <h2>{day.day_koulouff}</h2> 
            <h3>{day.contain}</h3>  
        </div>
    )
}

export default AdminDay
