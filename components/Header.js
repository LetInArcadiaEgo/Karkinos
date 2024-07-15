import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Saad's Hell Psyop Meme Generator</h2>
            <h4 className="header--project">Take over the world with lies and disinfo!</h4>
        </header>
    )
}