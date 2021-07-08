import shortid from 'shortid';
import types from './action-types';

export const myAction = value => ({
        type: 'MY_ACTION',
        payload: value,
    });

export const addContact = ({name, number}) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number
    },
});

export const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});

export const filterContacts = value => ({
    type: types.FILTER,
    payload: value
});