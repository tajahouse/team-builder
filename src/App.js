import React, { useState } from 'react';
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
  const handleChanges = event =>{
    setTeamMember({ name: event.target.value });
    console.log({event});
  };
  const addNewName = member =>{
    const newName ={
      id:Date.now(),
      name: member.name
    };
    setTeamMember([...teamMember, newName])
  }

  const submitForm = event => {
    event.preventDefault();
    addNewName(teamMember);
  };


  return (
    <div className="App">
    <form onSubmit ={submitForm}>
      <label htmlFor ="name">Name</label>
      <input 
        id="name" 
        onChange={handleChanges}
        type="text" 
        placeholder="Team member name"
      />
      <button type="submit">Add Name</button>
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
