import {TypeOfAC} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type profilePageType = {
    postsData: Array<postType>
}

type postType = {
    id: number
    message: string
    like: number
}

let initialState: profilePageType =  {
    postsData: [
        {id: 1, message: 'React', like: 45},
        {id: 2, message: 'JavaScript', like: 20},
        {id: 3, message: 'TypeScript', like: 30},
    ],
}



const profileReducer = (state = initialState,
                        action: TypeOfAC) => {
    switch (action.type) {
        case 'ADD-POST-MESSAGE':
            let newPost = {
                id: 4,
                message: action.postMessage,
                like: 0
            }
            state.postsData.push(newPost)
            return state
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