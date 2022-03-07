import {combineReducers} from "redux"
//import users from "./users";
import vehicles from "./vehicles"
import women from "./women"
import {configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({vehicles, women})
//const reducer = combineReducers({users, vehicles})
//In order to use redux a store must be initialized and passed to the Provider component.
export const store = configureStore({reducer})
