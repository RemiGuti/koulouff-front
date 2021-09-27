import React from 'react'
import Error from "../pictures/Error.png"
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <div>
            <h2 className="error">Cette page n'existe pas !</h2>
            <img className="errorPhoto" src={Error} alt="error page"></img>
        </div>
    )
}

export default ErrorPage
