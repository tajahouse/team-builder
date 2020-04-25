import React from 'react';

const Team = (props) =>{
    return (
        <div>

            {props.teamList.map(people => (
                <div key={people.id}>
                    <h2>Name: {people.name}</h2>
                    <p>Email: {people.email}</p>
                    <p>Role: {people.role}</p>
                </div>
            ))}

        </div>
    )
}

export default Team;