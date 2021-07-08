//import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './reducers';

// const RootReducer = combineReducers({
//   contacts: contactsReducer
// })

// const initialState = {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   };

// const store = createStore(RootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
  devTools: process.env.NODE_ENV === 'development',
})

export default store;