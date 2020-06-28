import React, {Component} from 'react'
import axios from 'axios'
import './Signup.css'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/auth'

import Rainbow from './Rainbow'
import Input from '../UI/Input/Input'

class Signup extends Component {
    state = {
            formInputsConfig: [
                {
                    type: "text",
                    label: 'first name',
                    name: 'firstName',
                    clicked: false,
                    value: ''
                },
                {
                    type: "text",
                    label: 'last name',
                    name: 'lastName',
                    clicked: false,
                    value: ''
                },
                {
                    type: "text",
                    label: 'user name',
                    name: 'userName',
                    clicked: false,
                    value: ''
                },
                {
                    type: "email",
                    label: 'email id',
                    name: 'email',
                    clicked: false,
                    value: '' 
                },
                {
                    type: "password",
                    label: 'password',
                    name: 'password',
                    clicked: false,
                    value: ''  
                },
                {
                    type: "password",
                    label: 'confirm password',
                    name: 'confirmPassword',
                    clicked: false,
                    value: ''
                }
            ],

            signedUp: false,
            error: ''
    }

    inputClicked = (e) => {
        let updatedInputsConfig = this.state.formInputsConfig.map(inputConfig => {
            if (inputConfig.name === e.target.name) {
                inputConfig.clicked = true
            } else if (inputConfig.value === '') {
                inputConfig.clicked = false
            }
            
            return inputConfig
        })
        this.setState({formInputsConfig: updatedInputsConfig})
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        const updatedInputsConfig = this.state.formInputsConfig.map((input) => {
            if (input.name === name) {
                input.value = value
            }
            return input
        })

        this.setState({ formInputsConfig: updatedInputsConfig })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const cred = {}

        for (let i=0;i<this.state.formInputsConfig.length;i++) {
            cred[this.state.formInputsConfig[i].name] = this.state.formInputsConfig[i].value 
        }
        axios.post("http://localhost:3001/user", cred)
        .then(res => {
            console.log(res.data)
            this.props.setAuth(res.data.token)
            this.props.history.push("/")
        
        })
        .catch(e => console.log(e))
    }

    render() {
        let inputs = this.state.formInputsConfig.map(inputConfig => (
            <Input key={inputConfig.name} handleChange={this.handleChange} handleClick={this.inputClicked} name={inputConfig.name} value={inputConfig.value} type={inputConfig.type} label={inputConfig.label} clicked={inputConfig.clicked} />
        ))
        return (
            <div className="signup-div">
                <h2>Please Sign up</h2>
                <Rainbow />
                <form onSubmit={this.handleSubmit} className="signup-form">
                    {inputs}
                    <Rainbow />
                    <p style={{color:'black'}}>{this.state.error}</p>
                    <button type="submit">register</button>
                </form>
            </div>
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
        setAuth: (token) => dispatch(actions.setAuth(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
