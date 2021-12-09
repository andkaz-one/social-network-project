import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, profilePageType} from "./profileReducer";
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType} from "./dialogsReducer";
import {sidebarActionType, sideBarReducer, sidebarType} from "./sideBarReducer";
import {
    followActionType,
    setCurrentPageActionType, setPreloaderActionType, setTotalUsersCountActionType,
    setUsersActionType,
    unfollowActionType,
    usersReducer
} from "./usersReducer";


/*export type RootStateType = {
    profilePage: profilePageType
   /!* dialogsPage: dialogsPageType*!/
    sidebar: Array<sidebarType>
    users: Array<UserType>
}*/

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