import React from 'react'
// import {TwitchEmbed} from "react-twitch-embed"
import Iconsub from "../pictures/iconSub.png"
import Iconig from "../pictures/iconIg.png"
import Icondon from "../pictures/iconDon.png"
import "./Stream.css"

function Stream() {
    // const video = new Twitch.Embed("twitch-embed", {
    //     width: "100%",
    //     height: 600,
    //     channel: "koulouff",
    //     theme: "dark",
    // });
    return (
        <div>
            <section>
           <video src="https://player.twitch.tv/?channel=koulouff" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"/>
            {/* <video controls src="https://embed.twitch.tv/embed/v1.js" {video}/> */}
            {/* <video>
                <div id="twitch-embed"></div>
                <script src="https://embed.twitch.tv/embed/v1.js"></script>
                <script type="text/javascript">
                new Twitch.Embed("twitch-embed", {
                    width: "100%",
                    height: 600,
                    channel: "koulouff",
                    theme: "dark",
                });
                </script>
            </video> */}

            <div className="button">
                <div className="social-container">
                    <div className="social-element"><a  rel="stylesheet" href="https://www.twitch.tv/products/koulouff/ticket?ref=wizebot_website" target="_blank"
                        className="animated-button2" id="button-sub">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={Iconsub} id="iconSub"/>
                    </a></div>
                    <span>
                        <p className="empty">SUBSCRIBE</p>
                        <p className="empty">Abonne-toi à la chaîne et obtiens des avantages !</p>
                    </span>
                </div>
                <div className="social-container">    
                    <div className="social-element"><a rel="stylesheet" href="https://www.instant-gaming.com/fr/?igr=koulouff" target="_blank"
                        className="animated-button2" id="button-Ig">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={Iconig} id="iconIg"/>
                    </a></div>
                    <span>
                        <p className="empty">INSTANT GAMING</p>
                        <p className="empty">Achète tes jeux moins cher !</p>
                    </span>
                </div>
                <div className="social-container">
                    <div className="social-element">
                        <a rel="stylesheet" href="https://streamlabs.com/koulouff/tip" target="_blank"
                        class="animated-button2" id="button-Don">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <img src={Icondon} id="iconDon"/>
                        </a>
                    </div>
                    <span>
                        <p className="empty">DONATION</p>
                        <p className="empty">Soutien d'avantage ton streamer en faisant un don !</p>
                    </span>
                </div>
            </div>

            </section>
        </div>
    )
}

export default Stream
