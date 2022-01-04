import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, SetProfileActionType} from "./profileReducer";
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType} from "./dialogsReducer";
import {sidebarActionType, sideBarReducer} from "./sideBarReducer";
import {
    followActionType,
    setCurrentPageActionType, setPreloaderActionType, setTotalUsersCountActionType,
    setUsersActionType,
    unfollowActionType,
    usersReducer
} from "./usersReducer";
import {authReducer, setUserAuthDataActionType} from "./authReducer";


export type TypeOfAC = AddPostActionType |
    UpdateMessageActionType |
    SendMessageActionType |
    sidebarActionType |
    followActionType |
    unfollowActionType |
    setUsersActionType |
    setCurrentPageActionType |
    setTotalUsersCountActionType |
    setPreloaderActionType |
    SetProfileActionType |
    setUserAuthDataActionType


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    authorization: authReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)


console.log(store.getState())


