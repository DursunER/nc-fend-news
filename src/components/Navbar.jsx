import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navlink">
      <Link to="/">Home</Link>
      <Link to="/users">Authors</Link>
      <Link to="/topics">Article Categories</Link>
      <Link to="/articles">See all Articles</Link>
    </div>
  );
}

export default Navbar;
