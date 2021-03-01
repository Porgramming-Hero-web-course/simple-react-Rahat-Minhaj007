import React from 'react';
import './PlayerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const PlayerInfo = (props) => {
    const {name,img,salary,team,club,role,statics} = props.info;
    const handleAddPlayer = props.handleAddPlayer;

    
    return (
        <div id="team" className="playerStyle">
            <div style = {{backgroundColor :"#0b7e1e",borderRadius :"10px"}}  className="user-img">
                <img style={{ width: "200px", height :"200px", borderRadius :"50%",marginTop :"4px"}} src={img} alt="" />
            </div>
            <div className="user-info mt-2">
                
                <h3 >{name}</h3>
                <h6 >National Team : {team}</h6>
                <h6>Club : {club}</h6>
               
                <h6>Role: {role}</h6>
                <h6 style={{color: 'rgb(51, 54, 245)'}}><span style={{color: 'black'}}>statics :</span> {statics}</h6>
                <h5  >Salary :$ {salary}</h5>
                <button className="btn btn-success"  onClick={() => handleAddPlayer(props.info)} ><FontAwesomeIcon icon={faUserPlus} /> Add Player </button>
            </div>

        </div>
    );
};

export default PlayerInfo;