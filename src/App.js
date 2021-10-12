import React from 'react';
import './App.css'; 
import Form from './components/form/Form'
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter:'',
  }

  formSubmitHandler = data => {
    const normalizedFilter = data.name.toLowerCase();
    
    if (this.state.contacts.some(contact => contact.name.toLowerCase()===normalizedFilter)){
      alert(`The name ${data.name} already exists.`)
      return;
    }

    this.setState({ 
      contacts: [...this.state.contacts, {
      name: data.name,
      number: data.number,
      }] 
    });
  }

  handleFilterChange = (event) => {
    this.setState({ 
      filter: event.currentTarget.value, 
    });
  }

  deleteButtonHandler = name => {
    const newContacts = this.state.contacts.filter(contact => contact.name !== name);
    this.setState({
      contacts: newContacts
  });
} 

componentDidMount() {
  const items = localStorage.getItem('items');
  const parsedItems = JSON.parse(items);
  if (parsedItems){
    this.setState({contacts: parsedItems})
  }
};

componentDidUpdate(prevProps, prevState){
  if(this.state.contacts !== prevState) {
    localStorage.setItem('items', JSON.stringify(this.state.contacts));
  }
}
  render(){
    return (
    <div>
      <h1>Phonebook</h1><br/>
      <Form
        onSubmit={ this.formSubmitHandler }
        // contacts={ this.contacts}
      />

      <Filter
        handleFilterChange={this.handleFilterChange}
      />
      
      <ContactList
        contacts={this.state.contacts}
        filter={this.state.filter}
        deleteButtonHandler={this.deleteButtonHandler}
      />
    </div>
    );
  }
}

export default App;
