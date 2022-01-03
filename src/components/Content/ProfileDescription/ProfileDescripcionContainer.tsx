import React, {useEffect} from "react";
import axios from "axios";
import {profilePageType, setProfileAC} from "../../../redux/profileReducer";
import {ProfileDescripcion} from "./ProfileDescripcion";
import { connect } from "react-redux";
import {rootReducerType} from "../../../redux/store";
import { withRouter } from "react-router-dom";


class ProfileDescripcionContainer extends React.Component<any, profilePageType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfileAC(response.data)
            })
    }

    render() {
        return <ProfileDescripcion {...this.props} profile={this.props.profile}/>
    }
}



const mapStateToProps = (state: rootReducerType) => ({
    profile: state.profilePage.profile,
})


const ProfileDescriptionWithRouter = withRouter(ProfileDescripcionContainer)


export default connect (mapStateToProps, {setProfileAC})(ProfileDescriptionWithRouter)