import {
    AddPostActionType,
    dialogsPageType,
    SendMessageActionType,
    UpdateMessageActionType
} from "./State";




const dialogsReducer = (state: dialogsPageType,
                        action: AddPostActionType | UpdateMessageActionType | SendMessageActionType) => {
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