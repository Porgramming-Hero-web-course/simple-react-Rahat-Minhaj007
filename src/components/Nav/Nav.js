import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div id="home" className="head">
        <h1>Team Maker</h1>
        <nav style={{marginTop:"15px"}}>
        
            <a href="#home">Home</a>
            <a href="#team">Team</a>
            <a href="#about">About</a>
    
        </nav>
        </div>
    );
};

export default Nav;