import { connect } from 'react-redux';
import { ContactItem } from './ContactItem';
import styles from './ContactList.module.css';
import actions from '../../redux/actions';

const ContactList = ({ contacts, onClick}) => {
    return (
    <ul className={styles.list}>
        {contacts.length > 0 ?
        < ContactItem contacts={contacts} onClick={(e) => onClick(e.target.name)}  />
        : <p>No contacts</p>}
      </ul>
    )
}

const getFilteredContacts = (allContacts, filter) => {
  const normalizeFilterValue = filter.toLowerCase();
  return allContacts.filter( 
  contact => 
    contact.name.toLowerCase().includes(normalizeFilterValue) ||
    contact.number.includes(filter)
);
}


const mapStatetoProps = ({contacts: {items, filter}}) => ({
  contacts: getFilteredContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.deleteContact(id))
})


export default connect(mapStatetoProps, mapDispatchToProps)(ContactList)