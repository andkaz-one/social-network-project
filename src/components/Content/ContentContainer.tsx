import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {Dispatch} from "redux";
import {addPostAC, postType, profilePageType} from "../../redux/profileReducer";
import {Content} from "./Content";


type MapStatePropsType = {
    postsData: profilePageType
}

type MapDispatchPropsType = {
    onClickAddPostHandler: (postMessage: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType) => ({
    postsData: state.profilePage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickAddPostHandler: (postMessage: string) => {
        dispatch(addPostAC(postMessage))
    }
})


export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)