import { combineReducers } from 'redux'
import {TYPE_USERNAME, ADD_EVENT} from './actions.js'


function USER_NAME(state = "", action){
    switch(action.type){
        case TYPE_USERNAME:
            return action.username
        default:
            return state;
    }
}

function EVENTS_ARRAY(state = [], action){
    switch(action.type){
        case ADD_EVENT:
            return [
                ...state,
                action.event
            ];
        default:
            return state;
        }
    }

export default combineReducers(
    {
        USER_NAME,
        EVENTS_ARRAY
    }
)
