import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, profilePageType} from "./profileReducer";
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType} from "./dialogsReducer";
import {sidebarActionType, sideBarReducer, sidebarType} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";


/*export type RootStateType = {
    profilePage: profilePageType
   /!* dialogsPage: dialogsPageType*!/
    sidebar: Array<sidebarType>
    users: Array<UserType>
}*/

export type TypeOfAC = AddPostActionType | UpdateMessageActionType | SendMessageActionType | sidebarActionType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    users: usersReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)