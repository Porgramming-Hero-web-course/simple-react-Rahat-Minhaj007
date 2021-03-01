import React from 'react';

const PlayerCart = (props) => {
    const { img, name, salary, role } = props.us
    const cartStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(241, 241, 241)",
        marginTop: "40px",
        padding: "10px",
        boxShadow: "5px 5px 10px grey",
        height: "380px",
        width: "260px",
        color: "black",
        textAlign: "center",
        marginLeft: "30px"


    }
    return (
        <div>

            <div style={cartStyle}>

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