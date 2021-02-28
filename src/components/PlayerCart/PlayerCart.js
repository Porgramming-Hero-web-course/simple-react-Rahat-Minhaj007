import React from 'react';

const Cart = (props) => {
    const {img,name,salary} = props.us
    const cartStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(241, 241, 241)",
        marginTop: "50px",
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
            <div style = {{backgroundColor :"#4b98f0",borderRadius :"10px"}}  className="user-img">
                <img style={{ width: "200px", height :"200px", borderRadius :"50%",marginTop :"4px"}} src={img} alt="" />
            </div>
            <div>
            <h4 >My Name is : {name}</h4>
                <p  style={{color: 'rgb(51, 54, 245)'}}>Email : {name}</p>
           
                <p  style={{color: 'rgb(51, 54, 245)'}}>Salary :$ {salary}</p>
              
            </div>
            </div>

        </div>
    );
};

export default Cart;