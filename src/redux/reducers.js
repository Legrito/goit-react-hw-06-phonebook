import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const add = (state, { payload }) => {
        return state.find(contact => contact.name === payload.name) 
        ? alert("The name is already exist") 
        : state.find(contact => contact.number === payload.number) 
        ? alert("The number  is already exist") 
        : [...state, payload];
};

const items = createReducer([], {
    [actions.addContact]: add,
    [actions.deleteContact]: (state, { payload }) => state.filter( contact => contact.id !== payload),
})

const filter = createReducer('', {
    [actions.filterContacts]: (_, {payload}) => payload
})


export default combineReducers({
    items,
    filter,
})