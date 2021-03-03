import React from "react";
import "./style.css";

function UserCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name.first} src={props.picture.thumbnail} />
            </div>
        </div>
    )
}

export default UserCard;