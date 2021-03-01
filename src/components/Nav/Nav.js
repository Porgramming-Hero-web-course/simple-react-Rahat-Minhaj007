import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div id="home" className="head">
        <h1 style={{fontFamily: 'cursive'}}>Team Maker</h1>
        <nav  style={{marginTop:"15px"}}>
        
            <a className="navbar-brand" href="#home">Home</a>
            <a className="navbar-brand" href="#team">Team</a>
            <a className="navbar-brand" href="#about">About</a>
    
        </nav>
        </div>
    );
};

export default Nav;