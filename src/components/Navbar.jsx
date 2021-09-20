import React from 'react'
import Logo from "../pictures/Logo222.png"
import Facebook from "../pictures/facebook.png"
import Twitter from "../pictures/twitter.png"
import Discord from "../pictures/discord.png"
import Instagram from "../pictures/insta.png"
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navigation">
                
                <span><img src={Logo} className="logo" alt="logo"/></span>
                
                <div class="social">
                    <a rel="stylesheet" href="https://www.facebook.com/Koulouff/" target="_blank">
                        <img className="rs" src={Facebook} alt="facebook"/></a>
                    <a rel="stylesheet" href="https://twitter.com/koulouff" target="_blank">
                        <img className="rs" src={Twitter} alt="twitter"/></a>
                    <a rel="stylesheet" href="https://discord.com/invite/ypGeKtY" target="_blank">
                        <img className="rs" src={Discord} alt="discord"/></a>
                    <a rel="stylesheet" href="https://www.instagram.com/koulouff/" target="_blank">
                        <img className="rs" src={Instagram} alt="instagram"/></a>  
                </div>
                
                <div className="menu">
                    <Link className="animated-button1" to="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        STREAM
                    </Link>
                   
                    <Link className="animated-button1" to="/bio">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        BIO
                    </Link>
                    <Link className="animated-button1" to="/clips">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CLIPS
                    </Link>
                    <Link className="animated-button1" to="/planning">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        PLANNING
                    </Link>
                </div>

                <div className="miniFooter">
                    <a className="footer" href="mailto:koulouffpro@gmail.com">SIGNALER UN BUG</a>
                    <a className="footer" href="mailto:koulouffpro@gmail.com">CONTACT</a>
                    <a className="footer" href="">CRÉDITS</a>
                    <span className="copyright">COPYRIGHT KOULOUFF ©2021</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
