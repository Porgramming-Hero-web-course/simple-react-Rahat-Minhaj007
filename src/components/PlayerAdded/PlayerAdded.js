import React from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';

const PlayerAdded = (props) => {
    const addedPlayers = props.addedPlayers

    let totalIncome = 0;
    // for (let i = 0; i < addedPlayers.length; i++) {
    //     const addedplayer = addedPlayers[i];
        
    //     totalIncome = totalIncome + addedplayer.salary;
        
    // }
     totalIncome = addedPlayers.reduce((sum, player) => sum + player.salary,0);
    return (
        <div>
            <h3 style={{color: 'white'}}>Players Total Salary : $ {totalIncome}</h3>
            {
                addedPlayers.map(us => <PlayerCart us={us} key={us.id}></PlayerCart> )
            }
            
        </div>
    );
};

export default PlayerAdded;