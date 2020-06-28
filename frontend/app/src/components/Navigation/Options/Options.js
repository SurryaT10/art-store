import React from 'react' 
import './Options.css'
import Option from './Option/Option'

const Options = (props) => {
    const options = ["profile", "logout"]

    return (
        <div className="options-div">
            {options.map(option => <Option key={option} name={option} logout={props.onLogout} /> )}
        </div>
    )
}

export default Options
