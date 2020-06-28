import React from 'react'
import Navitems from '../Navitems/Navitems'
import './SideDrawer.css'

const sideDrawer = (props) => {
    let drawer = null
    if (props.show) {
        drawer = (
            <div className="side-drawer">
                <Navitems />
            </div>
        )
    }
    return (
        drawer  
    )
}

export default sideDrawer