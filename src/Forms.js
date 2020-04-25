import React from 'react';


const Forms = () =>{
    return(
        <div>
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
        </div>
    )
}

export default Forms;