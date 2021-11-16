import {TypeOfAC} from "./store";

export type UpdateMessageActionType = ReturnType<typeof updateMessageTextAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>


type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Andrei',},
        {id: 2, name: 'Viktoria',},
        {id: 3, name: 'John',},
    ] as Array<dialogType>,
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up'},
        {id: 3, message: 'Hi'},
    ] as Array<messageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState,
                        action: TypeOfAC): InitialStateType => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessage}
        case 'SEND-MESSAGE':
            let newMessageText = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 4, message: newMessageText})
            return {...state, messagesData: [...state.messagesData]}
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