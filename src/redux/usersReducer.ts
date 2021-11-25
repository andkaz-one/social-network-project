

/*type UsersType = {
    users: Array<UserType>
}*/

export type UserType = {
    id: number
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
    users: [
        {id: 1, name: 'Andrei', status: "Hello i'm new user", followed: true, location: {country: 'Poland', city: 'Warsaw'}},
        {id: 2, name: 'Viktoria', status: "Hello i'm new user", followed: false, location: {country: 'Poland', city: 'Warsaw'}}
    ]
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: typesAC): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true}: m)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false}: m)}
        }
       /* case 'SET-USERS': {
            return {...state,[...state.users, action.us]}
        }*/
        default:
            return state
        }
    }


export type typesAC = followActionType | unfollowActionType /*| setUsersActionType*/

type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
/*type setUsersActionType = ReturnType<typeof setUsersAC>*/



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

/*
export const setUsersAC = (us: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        us
    }
}
*/


