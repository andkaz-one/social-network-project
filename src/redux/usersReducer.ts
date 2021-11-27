import {TypeOfAC} from "./store";

export type UserType = {
    id: number
    imageAddress: string
    name: string
    status: string
    followed: boolean
    location: LocationUserType
}

type LocationUserType = {
    country: string
    city: string
}


let initialState: InitialStateUsersType = {
    users: []
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: TypeOfAC): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true}: m)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false}: m)}
        }
        case 'SET-USERS': {
            return {...state, users: action.user}
        }
        default:
            return state
        }
    }
/*[...state.users, action.user]*/


/*export type typesAC = followActionType | unfollowActionType | setUsersActionType*/

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>



export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersAC = (user: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        user
    } as const
}


