import { connect } from 'react-redux';
import styles from './Filter.module.css';
import actions from '../../redux/actions';

const Filter = ({ filter, onChange}) => {
    return (
        <input type="text" className={styles.filter} 
        name="filter" value={filter} onChange={onChange}/>
    )
}

const mapStatetoProps = state => ({
    filter: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.filterContacts(e.target.value))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);