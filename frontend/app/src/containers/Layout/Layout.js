import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/auth'

import AuxComponent from '../../hoc/AuxComponent/AuxComponent'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer' 

class Layout extends Component {

    state = {
        scrolled: false,
        openSideDrawer: false,
        openOptions: false
    }

    componentDidMount() {
        this.props.checkAuth()
        const listener = () => {
            const isTop = window.scrollY < 100
            if (!isTop) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        }
        window.addEventListener('scroll', listener)

            this.setState({listener: listener})
        }
        
        componentWillUnmount() {
            window.removeEventListener('scroll', this.listener)
        }

        onMenuClicked  = () => {
            this.setState((prevState) => {
                return { openSideDrawer: !prevState.openSideDrawer }
            })
        }

        showOptions = () => {
            this.setState((prevState) => {
                return { openOptions: !prevState.openOptions }
            })
        }

        onLogout = () => {
            this.props.logout()
        }

    render() {
        return (
            <AuxComponent>
                <Navbar showSideDrawer={this.onMenuClicked} 
                    scrolled={this.state.scrolled} 
                    isAuthenticated={this.props.isAuthenticated} 
                    showOptions={this.showOptions}
                    openOptions={this.state.openOptions}
                    onLogout={this.onLogout}
                />
                <SideDrawer show={this.state.openSideDrawer} />
                <main>
                    {this.props.children}
                </main>
            </AuxComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () => dispatch(actions.checkAuth()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
