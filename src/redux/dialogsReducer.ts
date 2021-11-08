import {TypeOfAC} from "./store";

export type UpdateMessageActionType = ReturnType<typeof updateMessageTextAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

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

export default dialogsReducer