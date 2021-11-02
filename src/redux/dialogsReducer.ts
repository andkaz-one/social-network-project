import {
    AddPostActionType,
    dialogsPageType,
    SendMessageActionType, TypeOfAC,
    UpdateMessageActionType
} from "./State";

let initialState: dialogsPageType = {
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
}


const dialogsReducer = (state = initialState,
                        action: TypeOfAC) => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        case 'SEND-MESSAGE':
            let newMessageText = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 4, message: newMessageText})
            return state
        default:
            return state
    }
}


export default dialogsReducer