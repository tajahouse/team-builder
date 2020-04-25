import React, { useState } from 'react';


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
        setTeamMember({ name: "", email:"", role:""})
        document.getElementById("form").reset()
    };
    
    return(
        <div>
    <form onSubmit ={submitForm} id="form">
      <label htmlFor ="name">Name</label>
      <input 
        id="name" 
        name="name"
        onChange={handleChanges}
        type="text" 
        placeholder="Team member name"
        value={teamMember.name}
      />

      <lable htmlFor="email">Email</lable>
      <input 
      id="email" 
      name="email"
      type="email" 
      placeholder="Email Here" 
      value = {teamMember.email} 
      onChange={handleChanges} 
      />

      <lable htmlFor="role">Role</lable>
      <input 
      id="role" 
      name="role"
      type="text" 
      onChange={handleChanges} 
      placeholder="Team member role" 
      value={teamMember.role}
      />

      <button type="submit">Add Name</button>

    </form>
        </div>
    )
}

export default Forms;