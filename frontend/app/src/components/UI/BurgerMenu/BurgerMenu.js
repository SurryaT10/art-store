import React from 'react'
import './BurgerMenu.css'

function BurgerMenu(props) {
    return (
        <div className="burger-menu" onClick={props.open}>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
        </div>
    )
}

export default BurgerMenu
