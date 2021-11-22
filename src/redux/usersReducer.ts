

let initialState = {
    users: [
        {id: 1, name: 'Andrei', status: "Hello i'm new user", followed: true, location: {country: 'Poland', city: 'Warsaw'}},
        {id: 1, name: 'Viktoria', status: "Hello i'm new user", followed: false, location: {country: 'Poland', city: 'Warsaw'}}
    ]
}

export const usersReducer = (state = initialState, action: typesAC) => {
    switch (action.type) {
        case 'FOLLOW': {
            return [...state.users].map(m => m.id === action.userID ? {...m, followed: true}: m)
        }
        case 'UNFOLLOW': {
            return [...state.users].map(m => m.id === action.userID ? {...m, followed: false}: m)
        }
        default: return state
    }
}

export type typesAC = followActionType | unfollowActionType

type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>


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



