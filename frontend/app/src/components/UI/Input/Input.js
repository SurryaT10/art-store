import React from 'react'
import './Input.css'


const input = (props) => {
    return (
        <div className="input-group">
            <label className={props.clicked ? "input-label focused" : "input-label"} >{props.label}</label>
            <input name={props.name} value={props.value} className="input" type={props.type} onClick={props.handleClick} onChange={props.handleChange} />
        </div>
    )
}

export default input