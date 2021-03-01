import React from 'react';
import './PlayerCart.css';
const PlayerCart = (props) => {
    const { img, name, salary, role } = props.us

    return (
        <div>

            <div className ="cartStyle">

                <div style={{ backgroundColor: "#0b7e1e", borderRadius: "10px" }} className="user-img">
                    <img style={{ width: "200px", height: "200px", borderRadius: "50%", marginTop: "4px" }} src={img} alt="" />
                </div>
                <div className="mt-3">
                    <h4 >{name}</h4>
                    <h3>Role : {role}</h3>
                    <h4 style={{ color: 'rgb(51, 54, 245)' }}>Salary :$ {salary}</h4>

                </div>
            </div>

        </div>
    );
};

export default PlayerCart;