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


export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoad: boolean
}

let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isLoad: false
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
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'SET-PRELOADER' : {
            return {...state, isLoad: action.isLoad}
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
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type setPreloaderActionType = ReturnType<typeof setPreloaderAC>



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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}

export const setPreloaderAC = (isLoad: boolean) => {
    return {
        type: 'SET-PRELOADER',
        isLoad
    } as const
}


