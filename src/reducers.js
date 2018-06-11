import { combineReducers } from 'redux'
import {TYPE_USERNAME, USER_LOGIN, ADD_GOING} from './actions.js'
import {event1, event2, event3} from './Abstract/Mock'
import {user1,user2,user3} from './Abstract/Mock'

//console.log(event1.pictureList)
const initialState = {
    USER_NAME: "",
    EVENTS_ARRAY: [event1, event2, event3],
    DEFAULT_USER: 0,
    USERS_ARRAY: [user1,user2, user3]
}

function USER_NAME(state=initialState, action){
    switch(action.type){
        case TYPE_USERNAME:
            return Object.assign({},state,{DEFAULT_USER:action.userName})
        default:
            return state;
    }
}

function EVENTS_ARRAY(state = [event1,event2, event3], action){
    switch(action.type){
        case ADD_GOING:
            if (state[action.event].goings.indexOf(state.DEFAULT_USER)<0){
                var newStates = 
                state[action.event].setGoings(state.DEFAULT_USER)
            }
        default:
            return state;
    }
}

function DEFAULT_USER(state = 0, action){
    switch(action.type){
        case USER_LOGIN:
            for(let i=0; i<state.USERS_ARRAY.length; ++i){
                if(state.USERS_ARRAY[i].userName===state.USER_NAME){
                    return i
                }
            }
        default:
            return state
    }
}

function USERS_ARRAY(state = [user1, user2, user3], action) {
    switch(action.type){
        case ADD_GOING:
            if (state[state.DEFAULT_USER].goings.indexOf(action.event)<0){
                state[state.DEFAULT_USER].goings.push(action.event)
            }
        default:
            return state;
    }
}

function combinedReducers(state, action) {
    USER_NAME = USER_NAME(state.USER_NAME,action)
    EVENTS_ARRAY = EVENTS_ARRAY({EVENTS_ARRAY: state.EVENTS_ARRAY, DEFAULT_USER: state.DEFAULT_USER},action)
}
