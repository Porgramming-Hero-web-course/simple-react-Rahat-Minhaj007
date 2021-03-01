import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faUsers} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
const Nav = () => {
    return (
        <div id="home" className="head">
        <h1 style={{fontFamily: 'cursive'}}>Team Maker</h1>
        <nav  style={{marginTop:"15px"}}>
        
            <a className="navbar-brand" href="#home"> <FontAwesomeIcon icon={faHome} />   Home</a>
            <a className="navbar-brand" href="#team"><FontAwesomeIcon icon={faUsers} /> Team</a>
            <a className="navbar-brand" href="#about"><FontAwesomeIcon icon={faAddressCard} />    About</a>
    
        </nav>
        </div>
    );
};

export default Nav;