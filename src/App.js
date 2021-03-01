import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import playersData from './data/data.json';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import PlayerAdded from './components/PlayerAdded/PlayerAdded';
import Nav from './components/Nav/Nav';


function App() {
  const [players, setPlayer] = useState([]);
  let [addedPlayers, setAddedPlayers] = useState([]);

  useEffect(() => {
    setPlayer(playersData)

  }, [])

  const handleAddPlayer = (playerClicked) => {
      let addedPlayer = [...addedPlayers, playerClicked];
      setAddedPlayers(addedPlayer);
}
  return (
    <div className="App">
      <Nav></Nav>
      <div className="app-body" >
        <div className="App-header">
          {
            players.map(player => <PlayerInfo info={player} key={player.id} handleAddPlayer={handleAddPlayer}></PlayerInfo>)
          }
        </div>
        <div className="cart">
          <h2>Players Loaded : {players.length}</h2>
          <h3>Players Added : {addedPlayers.length} </h3>
          <PlayerAdded addedPlayers={addedPlayers}></PlayerAdded>
        </div>
      </div>
    </div>
  );
}

export default App;
