import {
    AddPostActionType,
    profilePageType, SendMessageActionType, UpdateMessageActionType,
} from "./State";
/*

type PropsType = {
    state: profilePageType
    action: AddPostActionType
}*/


const profileReducer = (state: profilePageType,
                        action: AddPostActionType | UpdateMessageActionType | SendMessageActionType) => {
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

