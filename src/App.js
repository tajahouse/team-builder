import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import Team from "./Team";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: 'Kanit', sans-serif;
  color:white;
  font-size: 3.5em;
  text-shadow: 3px 3px 3px orange;  
  border-bottom: 5px double orange;
`;
  const names = [
    {
      id:1,
      name:"Laura",
      email:"laura@fake.email",
      role: "Manager"
    },
    {
      id:2,
      name:"Lacey",
      email: "lacey@fake.email",
      role: "UX Designer"
    }

  ];

function App() {
  const[teamList, setTeamList] = useState(names);
  const addNewMemeber = person =>{
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    }
    setTeamList([...teamList, newMember])
  }
  


  return (
    <div className="App">
      <H1>The Team</H1>
    <Forms addNewMember={addNewMemeber}/>
    <Team teamList={teamList} />
    </div>
  );
}

export default App;
