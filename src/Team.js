import React from 'react';
import styled from "styled-components";

const H2 = styled.h2`
  
    color: white;
    text-shadow: 1px 2px 2px black;
    text-align:center;
`;

const P = styled.p`
    color:white;
    text-align:center;
    text-shadow: 1px 2px 3px black
`;

const TeamCard = styled.div`
    background:orange;
    box-shadow: 0 5px 10px grey;
    width: 100%;
    max-width: 250px;
    padding: 10px;
    margin: 16px auto;
    text-align: left;
`;
const Team = (props) =>{
    return (
        <TeamCard>

            {props.teamList.map(people => (
                <div key={people.id}>
                    <H2>Name: {people.name}</H2>
                    <P>Email: {people.email}</P>
                    <P>Role: {people.role}</P>
                </div>
            ))}

        </TeamCard>
    )
}

export default Team;