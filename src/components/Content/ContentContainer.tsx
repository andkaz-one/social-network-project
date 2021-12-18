import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {addPostAC, profilePageType} from "../../redux/profileReducer";
import {Content} from "./Content";



type MapStatePropsType = {
    postsData: profilePageType

}

type MapDispatchPropsType = {
    onClickAddPostHandler: (postMessage: string) => void

}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType) => ({
    postsData: state.profilePage,

})



export const ContentContainer = connect(mapStateToProps,
    {onClickAddPostHandler: addPostAC})(Content)
