import React, {useEffect} from "react";
import axios from "axios";
import {profilePageType, setProfileAC} from "../../../redux/profileReducer";
import {ProfileDescripcion} from "./ProfileDescripcion";
import { connect } from "react-redux";
import {rootReducerType} from "../../../redux/store";


class ProfileDescripcionContainer extends React.Component<any, profilePageType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setProfileAC(res.data)
            })
    }

    render() {
        return <ProfileDescripcion profile={this.props.profile}/>
    }
}



const mapStateToProps = (state: rootReducerType) => ({
    profile: state.profilePage.profile,
})


export default connect (mapStateToProps, {setProfileAC})(ProfileDescripcionContainer)