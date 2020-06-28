import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
    userToken: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECK_AUTH:
            const token = localStorage.getItem('token')
            let authenticated = false
            if (token) {
                authenticated = true
            }
            return {
                ...state,
                isAuthenticated: authenticated,
                token
            }

        case actionTypes.STORE_AUTH:
            localStorage.setItem("token", action.token)
            return {
                ...state,
                isAuthenticated: true,
                userToken: action.token
            }

        case actionTypes.LOGOUT: {
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                userToken: ''
            }
        }

        default:
            return state
    }
}

export default reducer