import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display:flex;
    flex-direction: column;

`;

const InputBox = styled.div`
    padding-bottom:1em;
`;

const Button = styled.button`
  color: palevioletred;
  background-color:cornflowerblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover{
    transform: scale(1.2)
}
`;


const Forms = ({ addNewMember }) => {
    const[teamMember, setTeamMember] = useState({name: "", email:"", role:""});

    const handleChanges = event =>{   
        setTeamMember({ ...teamMember, [event.target.name]:event.target.value });
        console.log(teamMember);
    
      };
    
    const submitForm = event => {
        event.preventDefault();
        console.log(event)
        addNewMember(teamMember);
        // setTeamList([...teamList, teamMember])
        setTeamMember({ name: "", email:"", role:"" })
        // document.getElementById("form").reset()
    };
    
    return(
        <FormWrapper>
    <form onSubmit ={submitForm} id="form">
        <InputBox>
      <label htmlFor ="name">Name</label>
      <input 
        id="name" 
        name="name"
        onChange={handleChanges}
        type="text" 
        placeholder="Name Here"
        value={teamMember.name}
      />
      </InputBox>

      <InputBox>
      <label htmlFor="email">Email</label>
      <input 
      id="email" 
      name="email"
      type="email" 
      placeholder="Email Here" 
      value = {teamMember.email} 
      onChange={handleChanges} 
      />
      </InputBox>

      <InputBox>
      <label htmlFor="role">Role</label>
      <input 
      id="role" 
      name="role"
      type="text" 
      onChange={handleChanges} 
      placeholder="Role Here" 
      value={teamMember.role}
      />
      </InputBox>

      <Button type="submit">Add Name</Button>

    </form>
        </FormWrapper>
    )
}

export default Forms;