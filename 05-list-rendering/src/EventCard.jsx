import React from 'react'

export default function EventCard(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-text">
                    <p>{props.datetime}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}