import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[teamMember, setTeamMember] = useState({name: ""});

  return (
    <div className="App">
    <form>
      <label htmlFor ="name">Name</label>
      <input id="name" type="text" placeholder="Team member name"/>
    </form>
    </div>
  );
}

export default App;
