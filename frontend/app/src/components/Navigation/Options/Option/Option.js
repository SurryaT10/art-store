import React from 'react'
import './Option.css'

export default function Option(props) {
    let button = null
    switch(props.name) {
        case "logout":
            button = <button className="options-btn" onClick={props.logout} >{props.name}</button>
            break
        default:
            button = <button className="options-btn">{props.name}</button>
    }
    return button
}
