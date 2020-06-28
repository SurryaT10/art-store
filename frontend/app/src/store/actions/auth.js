import * as actionTypes from './actionTypes'

export const setAuth = (token) => {
    return {
        type: actionTypes.STORE_AUTH,
        token
    }
}

export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}