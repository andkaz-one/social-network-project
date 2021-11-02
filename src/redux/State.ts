
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

// TYPES OF STATE
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: TypeOfAC ) => void
}


export type TypeOfAC = AddPostActionType | UpdateMessageActionType | SendMessageActionType | sidebarActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateMessageActionType = ReturnType<typeof updateMessageTextAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type sidebarActionType = ReturnType<typeof sidebarAC>



export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: Array<sidebarType>
}

export type profilePageType = {
    postsData: Array<postType>


}

export type dialogsPageType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
    newMessageText: string


}

type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

type postType = {
    id: number
    message: string
    like: number
}

export type sidebarType = {
    id: number
    value: string
}



//STATEMENT
export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'React', like: 45},
                {id: 2, message: 'JavaScript', like: 20},
                {id: 3, message: 'TypeScript', like: 30},
            ],

        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Andrei',},
                {id: 2, name: 'Viktoria',},
                {id: 3, name: 'John',},
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Whats up'},
                {id: 3, message: 'Hi'},
            ],
            newMessageText: ''
        },
        sidebar: [
            {id: 1, value: "https://cdn-icons-png.flaticon.com/128/174/174858.png" },
            {id: 2, value: "https://cdn-icons-png.flaticon.com/128/2111/2111615.png" },
            {id: 3, value: "https://cdn-icons-png.flaticon.com/128/888/888879.png" },
        ],


    },
    getState() {
      return this._state
    },
    _callSubscriber() {
        console.log('rendering')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)


        /*if (action.type === 'ADD-POST-MESSAGE') {
            let newPost = {
                id: 4,
                message: action.postMessage,
                like: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === 'NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessageText = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messagesData.push({id: 4, message: newMessageText})
            this._callSubscriber(this._state)
        }*/
    }
}


// ACTION CREATORS

export const addPostAC = (postMessage: string) => {
    return (
        {
            type: "ADD-POST-MESSAGE",
            postMessage: postMessage
        } as const
    )
}

export const updateMessageTextAC = (newMessage: string) => {
    return (
        {
            type: 'NEW-MESSAGE-TEXT',
            newMessage: newMessage
        } as const
    )
}

export const sendMessageAC = () => {
    return(
        {
            type: 'SEND-MESSAGE'
        } as const

    )
}

export const sidebarAC = () => {
    return (
        {
            type: 'SIDEBAR'
        } as const
    )
}

























/*export const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'React', like: 45},
            {id: 2, message: 'JavaScript', like: 20},
            {id: 3, message: 'TypeScript', like: 30},
        ],

    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Andrei', },
            {id: 2, name: 'Viktoria', },
            {id: 3, name: 'John', },
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Whats up'},
            {id: 3, message: 'Hi'},
        ],
    },
    sidebar: [
        "https://cdn-icons-png.flaticon.com/128/174/174858.png",
        "https://cdn-icons-png.flaticon.com/128/2111/2111615.png",
        "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    ]


}

export const addPostMessage = (postMessage: string) => {
    let newPost = {
        id: 4,
        message: postMessage,
        like: 0
    }
    state.profilePage.postsData.push(newPost)
    renderPage()
}*/






