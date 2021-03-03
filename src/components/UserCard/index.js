import React from "react";

function UserCard(props) {
    return (
        <div className="col">
            <div className="card mb-3">
                <img className="card-img-top" src={props.user.picture} className="card-img-top" alt={`${props.user.name.first} ${props.user.name.last}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">Email: {props.user.email}</p>              
                </div>
                <div className="card-footer">
                    <small class="text-muted">Registered: {props.user.registered}</small>
                </div>
            </div>
        </div>
    )
}

export default UserCard;