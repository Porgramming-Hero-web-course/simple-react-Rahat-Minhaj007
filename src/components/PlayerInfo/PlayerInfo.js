import React from 'react';
import './PlayerInfo.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const UserInfo = (props) => {
    const {name,email,phone,img,salary,website} = props.info;
    const handleAddUser = props.handleAddUser;

    const userStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(241, 241, 241)",
        margin: "50px",
        padding: "10px",
        boxShadow: "5px 5px 10px grey",
        height: "500px",
        width: "300px",
        color: "black",
        display: "float",
        textAlign: "center"


    }
    return (
        <div  style={userStyle}>
            <div style = {{backgroundColor :"#4b98f0",borderRadius :"10px"}}  className="user-img">
                <img style={{ width: "200px", height :"200px", borderRadius :"50%",marginTop :"4px"}} src={img} alt="" />
            </div>
            <div className="user-info">
                
                <h4 >My Name is : {name}</h4>
                <p  style={{color: 'rgb(51, 54, 245)'}}>Email : {email}</p>
                <p  style={{color: 'rgb(51, 54, 245)'}}>Phone No : {phone}</p>
                <p  style={{color: 'rgb(51, 54, 245)'}}>Salary :$ {salary}</p>
                <p  style={{color: 'rgb(51, 54, 245)'}}>Website : {website}</p>
                <button id="btn" onClick={() => handleAddUser(props.info)} >  Add User </button>
            </div>

        </div>
    );
};

export default UserInfo;