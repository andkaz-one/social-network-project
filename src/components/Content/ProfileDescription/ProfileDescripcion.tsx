import React from "react";

type PropsType = {
    profile: any
}


export const ProfileDescripcion = (props: PropsType) => {


    return(

        <div>
            <img src={props.profile.photos && props.profile.photos.large} alt={''}/>
            <div><h3>{props.profile.fullName}</h3></div>
        </div>
    )
}