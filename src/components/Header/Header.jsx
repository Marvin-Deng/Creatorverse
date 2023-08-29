import React from 'react'
import "./HeaderStyles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>CREATORVERSE</h1>
        <div className="header-buttons">
          
          <Link to="/">
            <button className="button">
              VIEW ALL CREATORS
            </button>
          </Link>

          <Link to="addCreator">
            <button className="button">
              ADD A CREATOR
            </button>
          </Link>
        
        </div>
      </div>
    </header>
  );
}

export default Header;