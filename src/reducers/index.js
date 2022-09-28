import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDoReducer from "./toDoReducer";
import userReducer from "./userReducer";


const  rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer,
  users: userReducer
})

export default rootReducer;
