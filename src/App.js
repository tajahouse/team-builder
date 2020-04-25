import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const names = [
  "Laura",
  "Sidney",
  "Derwin",
  "Taja",
  "Angelia",
  "Lazurus",
  "Jucobie",
];

function App() {
  const[teamMember, setTeamMember] = useState({name: ""});
  const[teamList, setTeamList] = useState(names);

  return (
    <div className="App">
    <form>
      <label htmlFor ="name">Name</label>
      <input id="name" type="text" placeholder="Team member name"/>
    </form>
    <div>
      <ul>
        {teamList.map(name =>{
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;
