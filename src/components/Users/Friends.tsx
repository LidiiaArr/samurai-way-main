import React from "react";
import {connect} from "react-redux";

export const Friends = (props: any) => {
    return <div>
        {props.users.map(user => <div>
            <img src={user.photos.small}/>
            <span>{user.status}</span>
        </div>)}
    </div>
}

let mstp = (state) => {
    return {
        users: state.friends.users
    }
}

let mdtp = (dispatch) => {
    return {
    }
}
export default connect()(Friends)