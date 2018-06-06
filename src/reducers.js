import { combineReducers } from 'redux'
import {TYPE_USERNAME, LOG_IN} from './actions.js'

const Initial_State = {
    USER_NAME: "luzh",
    DEFAULT_USER: "luzh"
}

function changeUser(state = Initial_State, action){
    switch(action.type){
        case TYPE_USERNAME:
            return Object.assign({},state,{
                USER_NAME: action.username
            })
        default:
            return state;
    }
}

function userLogIn(state = Initial_State, action){
    switch(action.type){
        case LOG_IN:
            return Object.assign({},state,{
                DEFAULT_USER: state.USER_NAME
            })
        default:
            return state;
    }
}



export default combineReducers(
    {
        changeUser,
        userLogIn
    }
)
