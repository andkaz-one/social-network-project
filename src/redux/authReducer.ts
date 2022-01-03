import {TypeOfAC} from "./store";






export type InitialStateAuthType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

let initialState: InitialStateAuthType = {
    userId: '',
    email: '',
    login: '',
    isAuth: false
}



export const authReducer = (state: InitialStateAuthType = initialState, action: TypeOfAC): InitialStateAuthType => {
    switch (action.type) {
        case 'SET-AUTH': {
            return {...state, ...action.data}
        }

        default:
            return state
        }
    }


export type setUserAuthDataActionType = ReturnType<typeof setUserAuthDataAC>




export const setUserAuthDataAC = (data: InitialStateAuthType) => {
    return {
        type: 'SET-AUTH',
        data
    } as const
}




