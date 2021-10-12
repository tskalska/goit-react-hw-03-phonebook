import React from 'react';

export default function Filter({handleFilterChange}){
  return (<div>
    <span>Find contact by name</span>
    <label>
      <input 
        type="text"
        onChange={handleFilterChange}>  
      </input>
    </label>
  </div>)
}
