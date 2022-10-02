import React from "react";
const Card = (props) => {
    const profile = props;

    return (
        <div className="profile">
        <img src={profile.avatar_url} alt=''/>
        <div className="info">
            <div className="name">{profile.userName}</div>
            <div className="company">{profile.company}</div>
        </div>
    </div>
    )
}
export default Card;