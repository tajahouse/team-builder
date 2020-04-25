import React, { useState } from 'react';
import './App.css';

  const names = [
    {name:"Laura"},
    {name:"Sidney"},
    {name:"Derwin"},
    {name:"Taja"},
    {name:"Angelia"},
    {name:"Lazurus"},
    {name:"Jucobie"},
  ];

function App() {
  const[teamMember, setTeamMember] = useState({name: ""});
  const[teamList, setTeamList] = useState(names);
  const handleChanges = event =>{   
    setTeamMember({ name: event.target.value });
    console.log(teamMember);
;
  };


  const submitForm = event => {
    event.preventDefault();
    console.log(event)
    setTeamList([...teamList, teamMember])
    setTeamMember({ name: ""})
    document.getElementById("form").reset()
  };


  return (
    <div className="App">
    <form onSubmit ={submitForm} id="form">
      <label htmlFor ="name">Name</label>
      <input 
        id="name" 
        onChange={handleChanges}
        type="text" 
        placeholder="Team member name"
        value={teamMember.name}
      />
      <button type="submit">Add Name</button>
    </form>
    <div>
      <ul>
        {teamList.map(person =>{
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;
