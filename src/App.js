import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import Team from "./Team";

  const names = [
    {
      id:1,
      name:"Laura",
      email:"laura@fake.email",
      role: "Manager"
    }

  ];

function App() {
  const[teamList, setTeamList] = useState(names);
  const addNewMemeber = person =>{
    const newMember = {
      id: Date.now(),
      name: person.name
    }
    setTeamList([...names, newMember])
  }
  


  return (
    <div className="App">
      <h1>The Team</h1>
    <Forms addNewMember={addNewMemeber}/>
    <Team teamList={teamList} />
    </div>
  );
}

export default App;
