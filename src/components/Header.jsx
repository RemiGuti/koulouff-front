import React from 'react'
import Bassmourne from "../pictures/bassmourne.png"
import "./Header.css"


function Header() {
    return (
        <div>
            <img className="bassmourne" src={Bassmourne} alt="bassmoune"/>
        </div>
    )
}

export default Header
