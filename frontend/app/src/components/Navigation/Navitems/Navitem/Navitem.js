import React from 'react'
import { NavLink } from 'react-router-dom'

const navitem = (props) => (
    <NavLink to={props.to}><p>{props.name}</p></NavLink>
)

export default navitem

