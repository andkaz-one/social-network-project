import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)