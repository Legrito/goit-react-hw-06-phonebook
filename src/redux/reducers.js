import { combineReducers } from "redux";
import actionTypes from "./action-types";

const items = (state = [], {type, payload}) => {
    switch(type) {
        case actionTypes.ADD:
            return [...state, payload];
        
        case actionTypes.DELETE:
            return state.filter( contact => contact.id !== payload)

        default:
            return state;
    }
    return state;
};

const filter = (state = '', {type, payload}) => {
    switch(type) {
        case actionTypes.FILTER:
            return payload;

        default:
            return state; 
    }
    return state;
};


export default combineReducers({
    items,
    filter,
})