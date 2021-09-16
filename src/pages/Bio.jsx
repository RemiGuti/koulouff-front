import React from 'react'
import Photo from "../pictures/photo.jpg"
import Avatar from "../pictures/avatar.png"
import Navbar from "../components/Navbar.jsx"
import "./Bio.css"

function Bio() {
    return (
        <div>
            <div className="story-photo">

                <img className="photo" src={Photo} alt="photo"/>

                <div>
                    <h2 className="titre-true">C'est ki Koulouff ? (le vrai)</h2>
                    <p className="story-true">
                        <div className="jump">Moi c’est Rémi, Metalleux de Montbéliard et joueur depuis bien avant d’avoir mon premier poil au menton.</div>
                        <div className="jump">J'ai évolué dans le jeu vidéo sur différentes konsoles allant de la Master System à la Playstation 3 pour finir sur PC.</div>
                        <div className="jump">Vouant un kulte pour l'univers du jeu vidéo, j'avais envie de partager mon monde avek toi. Twitch était une de mes solutions !</div>
                        <div className="jump">Mon tout premier live a été le 04/05/2018 sur le jeu DOOM, tu komprendras donc pourkoi je porte konstament cette kaskette !</div>
                        <div className="jump">Sur mon live, je vais essayer de te partager mon univers, ma bonne humeur et un peu de sel, toujours au taket pour échanger avec toi ! Si tu aimes le jeu vidéal, tu es au bon endroit !</div>
                        <div className="jump">Et le «K» : Koulouff, Kommunauté, mon koté un peu mégalo !</div>
                    </p>
                </div>
            </div>
                

            <div className="story-avatar">
                <div>
                    <h2 className="titre-false">C'est ki Koulouff ? (le faux)</h2>
                    <p className="story-false">
                        <div className="jump">Au 21ème siècle, la façon de vivre de l’espèce humaine fait que toutes les âmes des personnes disparues finissent en enfer. Aucune échappatoire !</div>
                        <div className="jump">Koulouff, le créateur de le Communauté de la Barbe, est mort après avoir fait un live de 72 heures sans manger ni dormir. Son Ame a terminé sa route en enfer. Il y découvre un endroit gelé. Des cris d’agonies s’entendent de tous les côtés. Il ère un certain temps quand un démon surgit pour le torturer. Après plusieurs heures de souffrances, le démon s'en va et Koulouff s’assit à côté d’une pile de déchets et y trouve une Guitare Basse avec une tête de hache.</div>
                        <div className="jump">Il y joue pour essayer de trouver un soupçon de réconfort et après avoir finit de jouer, il fit le Riff du «Dramatic Look». Des runes d’un ton bleuté s’illuminèrent, et elle se mit à parler : «Mon nom est Bassmourne la Récolteuse ! J’ai le pouvoir de récupérer les Ames damnées. Si tu m’en fourni, je jure de t’aider à me débarrasser de tes geôliers et à te fournir une armée grâce aux âmes récoltées ! Vous serez en enfer, mais LIBRE !»</div>
                        <div className="jump">Koulouff y voit une opportunité ! Il crée «la Kommunauté» et appelle ses soldats les «Nekros». Grace au pouvoir de Bassmourne et à cette armée, une nouvelle vie commence dans la mort !</div>
                    </p>
                </div>

                <img className="avatar" src={Avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Bio
