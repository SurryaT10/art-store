import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/Home/Home'
import Signup from '../components/Signup/Signup'

import Aux from '../hoc/AuxComponent/AuxComponent'

function Router() {
    return (
        <Aux>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
        </Aux>
    )
}

export default Router
