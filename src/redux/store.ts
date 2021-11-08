import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, profilePageType} from "./profileReducer";
import dialogsReducer, {dialogsPageType, SendMessageActionType, UpdateMessageActionType} from "./dialogsReducer";
import {sidebarActionType, sideBarReducer, sidebarType} from "./sideBarReducer";


export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: Array<sidebarType>
}

export type TypeOfAC = AddPostActionType | UpdateMessageActionType | SendMessageActionType | sidebarActionType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)