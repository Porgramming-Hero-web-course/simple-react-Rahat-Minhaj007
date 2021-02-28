import React from 'react';

const Cart = (props) => {
    const {img,name,salary} = props.us
    const cartStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(241, 241, 241)",
        marginTop: "0px",
        padding: "10px",
        boxShadow: "5px 5px 10px grey",
        height: "350px",
        width: "230px",
        color: "black",
        textAlign: "center"


    }
    return (
        <div>
            <div style={cartStyle}>
            <div style = {{backgroundColor :"#0b7e1e",borderRadius :"10px"}}  className="user-img">
                <img style={{ width: "200px", height :"200px", borderRadius :"50%",marginTop :"4px"}} src={img} alt="" />
            </div>
            <div>
            <h4 >{name}</h4>
                <h4  style={{color: 'rgb(51, 54, 245)'}}>Salary :$ {salary}</h4>
              
            </div>
            </div>

        </div>
    );
};

export default Cart;