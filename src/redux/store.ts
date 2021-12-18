import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType} from "./profileReducer";
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType} from "./dialogsReducer";
import {sidebarActionType, sideBarReducer} from "./sideBarReducer";
import {
    followActionType,
    setCurrentPageActionType, setPreloaderActionType, setTotalUsersCountActionType,
    setUsersActionType,
    unfollowActionType,
    usersReducer
} from "./usersReducer";


export type TypeOfAC = AddPostActionType |
    UpdateMessageActionType |
    SendMessageActionType |
    sidebarActionType |
    followActionType |
    unfollowActionType |
    setUsersActionType |
    setCurrentPageActionType |
    setTotalUsersCountActionType |
    setPreloaderActionType


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)