import { combineReducers } from 'redux'
import {TYPE_USERNAME, USER_LOGIN} from './actions.js'
import {event1, event2} from './Abstract/Mock'
import {user1,user2} from './Abstract/Mock'


function USER_NAME(state = "", action){
    switch(action.type){
        case TYPE_USERNAME:
            return action.username
        default:
            return state;
    }
}

function EVENTS_ARRAY(state = [event1,event2], action){
    return state
}

function DEFAULT_USER(state = 0, action){
    switch(action.type){
        case USER_LOGIN:
            for(let i=0; i<state.USERS_ARRAY.length(); ++i){
                if(state.USERS_ARRAY[i].userName===state.USER_NAME){
                    return i
                }
            }
        default:
            return state
    }
}

function USERS_ARRAY(state = [user1, user2], action) {
    return state
}

export default combineReducers(
    {
        USER_NAME,
        EVENTS_ARRAY,
        DEFAULT_USER,
        USERS_ARRAY
    }
)
