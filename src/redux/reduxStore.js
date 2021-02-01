import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";
import navbarReducer from "./reducers/navbarReducer";
// const {createStore} = require("redux");

let reducersPack = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer
})


let store = createStore(reducersPack)




export default store