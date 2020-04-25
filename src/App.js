import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import Team from "./Team";

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
    <Forms/ >
    <Team name={name} />
    </div>
  );
}

export default App;
