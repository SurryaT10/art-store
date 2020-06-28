import React from 'react'
import './Navbar.css'
import Navitems from '../Navitems/Navitems'
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu'
import Options from '../Options/Options'

import Aux from '../../../hoc/AuxComponent/AuxComponent'

const navbar = (props) => {

    let profile = null

    if (props.isAuthenticated) {
        profile = <div className="profile-div">
            <i className="far fa-user-circle user-profile" onClick={props.showOptions} />
            <i className="fas fa-shopping-bag user-profile" />
            <div className="cart-number"></div>
            { props.openOptions ? <Options onLogout={props.onLogout} /> : null }
        </div>
    }
    return (
        <Aux>
            <div className="title">
                <h1>Art <span>Gallery</span></h1>
            </div>
            <nav className={props.scrolled ? 'navbar scrolled' : 'navbar'}>
                <BurgerMenu open={props.showSideDrawer} />
                <div className="list-items">
                    <Navitems />
                </div>
                {profile}
            </nav>
        </Aux> 
    )       
}

export default navbar