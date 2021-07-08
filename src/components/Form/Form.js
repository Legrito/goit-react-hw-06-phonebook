import { Component } from 'react';
import shortid from 'shortid';
import styles from './Form.module.css'
import { connect } from 'react-redux';
import {addContact} from '../../redux/actions';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      }
    
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value});
  }

  clearInput = () => {
    this.setState({ name: '', number: ''})
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.clearInput(); 
 }

    render() {
        const { name, number } = this.state;

        return (
        <form className={styles.form} onSubmit={this.handlerSubmit}>
        <label htmlFor={this.nameInputId}>Name </label>          
        <input
          type="text"
          name="name"
          value={name}
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId}>Number </label>          
        <input
          type="tel"
          name="number"
          value={number}
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />

        <button type="submit">Add</button>
      </form>
      )}

}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({name, number}) => dispatch(addContact({name, number}))
})

export default connect(null, mapDispatchToProps)(ContactForm);