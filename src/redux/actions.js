import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({name, number}) => ({
        payload: {
        id: shortid.generate(),
        name,
        number
        }
    }));

const deleteContact = createAction('contacts/delete');

const filterContacts = createAction('contacts/filter');

const actions = { addContact, deleteContact, filterContacts};

export default actions;