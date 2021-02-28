import React from 'react';
import Cart from '../PlayerCart/PlayerCart';

const Added = (props) => {
    const addedUsers = props.addedUsers
    console.log(addedUsers);
    let totalIncome = 0;
    for (let i = 0; i < addedUsers.length; i++) {
        const addeduser = addedUsers[i];
        
        totalIncome = totalIncome + addeduser.salary;
        
    }
    // const totalIncome = addedUsers.reduce((sum, user) => sum + user.salary,0);
    return (
        <div>
            <h3 style={{color: 'white'}}>Players Total Salary : $ {totalIncome}</h3>
            {
                addedUsers.map(us => <Cart us={us}></Cart> )
            }
            
        </div>
    );
};

export default Added;