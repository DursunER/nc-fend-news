import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="link">
      <Link to="/" >Home</Link>
      <Link to="/users" >Authors</Link>
      <Link to="/articles" >Article Categories</Link>
    </div>
  )
}

export default Navbar
