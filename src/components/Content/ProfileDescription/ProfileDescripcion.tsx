import React from "react";

type PropsType = {
    profile: any
}


export const ProfileDescripcion = (props: PropsType) => {


    return(
        <div>
            <img src={props.profile.photos.large}/>
            ava + description
        </div>
    )
}