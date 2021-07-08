import './App.css';
import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/Form/Form'
import ContactList from './components/ContactsList/ContactList';
import Filter from './components/Filter/Filter';
console.log(ContactForm);

const contacts = localStorage.getItem('contacts') !== null ? JSON.parse(localStorage.getItem('contacts')) : [];

class App extends Component {
  // static defaultProps = {
  //   contacts: contacts,
  //   filter: "",
  // }

  // state = {
  //   contacts: this.props.contacts,
  //   filter: this.props.filter,
  // }

  // addContact = (data) => {
  //   const newContactId = shortid.generate();
  //   const newContact = {
  //     id: newContactId,
  //     name: data.name,
  //     number: data.number
  //   }
  //   this.state.contacts.find(contact => 
  //     contact.name === data.name) ? alert("The name is already exist") 
  //   : this.state.contacts.find(contact => 
  //       contact.number === data.number) ? alert("The number  is already exist") 
  //   : this.setState((prevState) => {
  //     localStorage.setItem('contacts', JSON.stringify([...prevState.contacts, newContact]));
  //      return {contacts: [...prevState.contacts, newContact]}
  //   })
  // }

  handleFilterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  // deleteContact = ( e ) => {
  //   const currentId = e.currentTarget.name;
  //   this.setState((prevState) => {
  //     localStorage.setItem('contacts', JSON.stringify(prevState.contacts.filter(contact => contact.id !== currentId)));
  //    return { contacts: prevState.contacts.filter(contact => contact.id !== currentId),};
  //   });
  // };

  render() {
    // const { contacts, filter } = this.state;
    // const normalizeFilterValue = filter.toLowerCase();
    // const filteredContacts = contacts.filter( 
    //   contact => 
    //     contact.name.toLowerCase().includes(normalizeFilterValue) ||
    //     contact.number.includes(filter)
    // );

    return (
      <div className="App">
      <h1 className="App__title"> Phonebooks </h1>
      <ContactForm />
      <div className="App__contacts__container">
      <h2 className="App__contacts__title"> Contacts </h2>
      <h3 className="App__filter__title"> Find contacts by name </h3>
      <Filter />
      <ContactList />
      </div>
    </div>
    )
  }
}

export default App;
