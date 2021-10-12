import React from 'react';
// import Container from '../container/Container';
import shortid from 'shortid';
import styles from './Form.module.css';


class Form extends React.Component {
  state = {
    name: '',
    number: '',
  }

  nemeInputId=shortid.generate();
  numberInputId=shortid.generate();

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value, 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState ({
      name: '',
      number: '',
    });
    event.target.reset();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label htmlFor={this.nemeInputId}>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nemeInputId}
              onChange={this.handleInputChange}
              className = {styles.formInput}
            />
          </label>
          <label htmlFor={this.numberInputId}>Number:
            <input 
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              className = {styles.formInput}
              id={this.numberInputId}>
            </input>
          </label>
          <button className={styles.formButton}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;