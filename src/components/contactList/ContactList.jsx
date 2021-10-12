import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ContactList ({contacts, filter, deleteButtonHandler}){

  const normalizedFilter = filter.toLowerCase()
  const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))


  return ( 
  <div>
    <h2>Contacts: </h2><br />
    <ul>{filteredList.map(contact =>
      <li key={uuidv4()}>
        {contact.name}: {contact.number}
        <button type="button" onClick={ () => deleteButtonHandler(contact.name) }>
          Delete
        </button>
      </li>
      )}
    </ul>
  </div>)
}
