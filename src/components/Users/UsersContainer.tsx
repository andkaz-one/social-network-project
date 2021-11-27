import {connect} from "react-redux";
import {Users} from "./Users";
import {rootReducerType} from "../../redux/store";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";


type MapStatePropsType = {
    users: InitialStateUsersType
}

type MapDispatchPropsType = {
    followHandler: (userID: number) => void
    unFollowHandler: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    users: state.usersPage
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
    followHandler: (userID: number) => {
        dispatch(followAC(userID))
    },
        unFollowHandler: (userID: number) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
})


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)