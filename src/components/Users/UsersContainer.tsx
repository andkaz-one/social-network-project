import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {rootReducerType} from "../../redux/store";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC,
    setPreloaderAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";


export type MapStatePropsType = {
    users: InitialStateUsersType
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export type MapDispatchPropsType = {
    followHandler: (userID: number) => void
    unFollowHandler: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (setCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setPreloader: (isLoad: boolean) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    users: state.usersPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
})



export const UsersContainer = connect(mapStateToProps, {
    followHandler: followAC,
    unFollowHandler: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setPreloader: setPreloaderAC
})(UsersAPIComponent)