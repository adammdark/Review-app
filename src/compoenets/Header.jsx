import React, { useContext, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = ({text="Review App",bgColor = "red",textColor="white"}) => {

 const headerStyle = {
  backgroundColor: bgColor,
  color: textColor
 }

    
  return (
    <header style={headerStyle}>
       <div className="container">
            <div>
              <Link to="/">
                <h2>{text}</h2>
              </Link>
              <Link to="/about">About</Link>
            </div>
       </div>
    </header>
  )
}

export default Header

