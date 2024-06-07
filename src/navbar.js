import React from "react"

export default function Navbar() {
    return (
        
    <nav>
          <img className="logo" src={require("./logo.png")} />
          <ul className="NavLinks">
            <li><a href="/">ABOUT ME</a></li>
            <li><a href="./resume.pdf">RESUME</a></li>
            <li><a href="/">PHOTOGRAPHY</a></li>
          </ul>
    </nav>
    )
}