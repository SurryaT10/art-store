import React from 'react'
import NavItem from './Navitem/Navitem'
import './Navitems.css'

const navitems = (props) => {
    const items = [
        {
            name: "home",
            to: "/"
        },{
            name: "shop",
            to: "/shop"
        },{
            name: "signup",
            to: "/signup"
        }
    ]

    return (
        <div className="items">
            {items.map(item => (
            <NavItem key={item.name} name={item.name} to={item.to} hideSideDraw={props.hideSideDraw} />
            ))}
        </div>
    )
}

export default navitems