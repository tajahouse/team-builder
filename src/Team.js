import React from 'react';

const Team = (props) =>{
    return (
        <div>
        <ul>
        {props.teamList.map(person =>{
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
        </div>
    )
}

export default Team;