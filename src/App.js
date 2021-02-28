import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import usersData from './data/data.json';
import UserInfo from './components/PlayerInfo/PlayerInfo';
import Added from './components/PlayerAdded/PlayerAdded';
import Nav from './components/Nav/Nav';


function App() {
  const [users, setUser] = useState([]);
  let [addedUsers, setAddedUsers] = useState([]);

  useEffect(() => {
    setUser(usersData)

  }, [])

  const handleAddUser = (userClicked) => {
    let addedUser = [...addedUsers, userClicked];
    setAddedUsers(addedUser);
  }
  return (
    <div className="App">
      <Nav></Nav>
      <div className="app-body" >
        <div className="App-header">
          {
            users.map(user => <UserInfo info={user} key={user.id} handleAddUser={handleAddUser}></UserInfo>)
          }
        </div>
        <div className="cart">
          <h2>Players Loaded : {users.length}</h2>
          <h3>Players Added : {addedUsers.length} </h3>
          <Added addedUsers={addedUsers}></Added>
        </div>
      </div>
    </div>
  );
}

export default App;
