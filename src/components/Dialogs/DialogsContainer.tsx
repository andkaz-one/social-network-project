import {connect} from "react-redux";
import {rootReducerType, RootStateType} from "../../redux/store";
import {InitialStateType, sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";

type MapStatePropsType = {
    dialogsData: InitialStateType
    messagesData: InitialStateType
    newMessageText: InitialStateType
}

type MapDispatchPropsType = {
    onClickSendMessageHandler: () => void
    onChangeInputHandler: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: rootReducerType) => ({
    dialogsData: state.dialogsPage,
    messagesData: state.dialogsPage,
    newMessageText: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
    onClickSendMessageHandler: () => {
        dispatch(sendMessageAC())
    },
    onChangeInputHandler: (newMessage: string) => {
        dispatch(updateMessageTextAC(newMessage))
    }


})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

