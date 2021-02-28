import React from 'react';
import './PlayerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const UserInfo = (props) => {
    const {name,img,salary,team,club,role,statics} = props.info;
    const handleAddUser = props.handleAddUser;

    const userStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(241, 241, 241)",
        margin: "50px",
        padding: "10px",
        boxShadow: "5px 5px 10px grey",
        height: "620px",
        width: "300px",
        color: "black",
        display: "float",
        textAlign: "center"


    }
    return (
        <div  style={userStyle}>
            <div style = {{backgroundColor :"#0b7e1e",borderRadius :"10px"}}  className="user-img">
                <img style={{ width: "200px", height :"200px", borderRadius :"50%",marginTop :"4px"}} src={img} alt="" />
            </div>
            <div className="user-info">
                
                <h4 >{name}</h4>
                <h4 >National Team : {team}</h4>
                <h4>Club : {club}</h4>
               
                <h3 >Role: {role}</h3>
                <h4  style={{color: 'rgb(51, 54, 245)'}}>statics : {statics}</h4>
                <h3  style={{color: 'rgb(51, 54, 245)'}}>Salary :$ {salary}</h3>
                <button id="btn" onClick={() => handleAddUser(props.info)} ><FontAwesomeIcon icon={faUserPlus} /> Add Player </button>
            </div>

        </div>
    );
};

export default UserInfo;