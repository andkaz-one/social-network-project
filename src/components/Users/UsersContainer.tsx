import {connect} from "react-redux";
import {Users} from "./Users";
import {rootReducerType} from "../../redux/store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC, setTotalUsersCountAC,
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
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    users: state.usersPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
})


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)