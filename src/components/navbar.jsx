import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin, faFlickr, faInstagram } from "@fortawesome/free-brands-svg-icons"


import profile from "../assets/usImg1.jpg";


export default function Navbar() {
  return (
    <nav className="navbar w-full pr-44 pt-5 mb-10  h-24 flex flex-row align-middle justify-between"> 
        <div className="headShot overflow-hidden rounded-full border-2 bg-primaryWhite w-10 h-10">
            <img  className="rounded-lg" src={profile}/>
        </div>
        <div className="socialToolBar text-white">
        <FontAwesomeIcon title="Linkedin" className="ml-5 text-2xl  text-primaryWhite cursor-pointer
                        hover:text-primaryRed cursor-pointer
                    " icon={faLinkedin} /> 
            <a href=" https://www.flickr.com/people/194651576@N08/" > 
        <FontAwesomeIcon title="Flickr" className="ml-5 text-2xl  text-primaryWhite cursor-pointer
                        hover:text-primaryRed  cursor-pointer
                    " icon={faFlickr} /> 
        </a>
                    <a  href="https://www.instagram.com/ishandrew/">
                    <FontAwesomeIcon title="Instagram" className="ml-5 text-2xl  text-primaryWhite cursor-pointer
                       nt hover:text-primaryRed cursor-pointer
                    " icon={faInstagram} /> 
                       </a>
       
                 
        </div>
    </nav>
  )
}
