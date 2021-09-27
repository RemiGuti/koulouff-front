import React from 'react'
import "./DayCard.css"

function DayCard({day}) {
    return (
        
        <div className="scene">
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={require(`../pictures/${day.day_koulouff}.jpg`).default}/>
                </div>   
                <div className="card__face card__face--back">
                    <img src={require(`../pictures/${day.contain}.jpg`).default}/> 
                </div> 
            </div>
        </div>    
    )
}

export default DayCard
