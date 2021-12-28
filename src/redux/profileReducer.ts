import {TypeOfAC} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetProfileActionType = ReturnType<typeof setProfileAC>


export type profilePageType = {
    postsData: Array<postType>
    profile: any

}

export type postType = {
    id: number
    message: string
    like: number
}

let initialProfileState =  {
    postsData: [
        {id: 1, message: 'React', like: 45},
        {id: 2, message: 'JavaScript', like: 20},
        {id: 3, message: 'TypeScript', like: 30},
    ] as Array<postType>,
    profile: {}



}

const profileReducer = (state: profilePageType = initialProfileState,
                        action: TypeOfAC): profilePageType => {
    switch (action.type) {
        case 'ADD-POST-MESSAGE':

            let newPost = {
                id: 4,
                message: action.postMessage,
                like: 0
            }
            state.postsData.push(newPost)
            return {...state, postsData: [...state.postsData]}
        case 'SET-PROFILE' : {
            return {...state, profile: action.profile}
        }

        default:
            return state
    }
}

export default profileReducer

export const addPostAC = (postMessage: string) => {
    return (
        {
            type: "ADD-POST-MESSAGE",
            postMessage: postMessage
        } as const
    )
}

export const setProfileAC = (profile: any) => {
    return (
        {
            type: 'SET-PROFILE',
            profile: profile
        } as const
    )
}

