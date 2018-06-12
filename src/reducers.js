import { combineReducers } from 'redux'
import {TYPE_USERNAME, USER_LOGIN, ADD_GOING, ADD_LIKE} from './actions.js'
import {event0, event2, event3} from './Abstract/Mock'
import {user1,user2,user3} from './Abstract/Mock'
import { Map } from 'immutable'
const { fromJS } = require('immutable')

//console.log(event1.pictureList)
const initialState = {
    "USER_NAME": "",
    "EVENTS_ARRAY": [event0, event2, event3],
    "DEFAULT_USER": 0,
    "USERS_ARRAY": [user1,user2, user3]
}

const immutableState = fromJS(initialState)

//console.log(event0.pictureList)

function combinedReducers(state = immutableState, action) {
    //console.log(state)
    switch(action.type){
        case ADD_GOING:
            var defaultUser = state.getIn(["DEFAULT_USER"])
            if (state.getIn(["USERS_ARRAY",defaultUser,"goings"]).indexOf(action.event)<0){
                var first = state.updateIn(["USERS_ARRAY",defaultUser,"goings"], List => List.push(action.event))
                if (state.getIn(["EVENTS_ARRAY",action.event,"goings"]).indexOf(defaultUser)<0){
                    var second = first.updateIn(["EVENTS_ARRAY",action.event,"goings"], List => List.push(defaultUser))
                    return second;
                }
                return first;
            }
            return state;
        case ADD_LIKE:
            var defaultUser = state.getIn(["DEFAULT_USER"])
                if (state.getIn(["USERS_ARRAY",defaultUser,"likes"]).indexOf(action.event)<0){
                    var first = state.updateIn(["USERS_ARRAY",defaultUser,"likes"], List => List.push(action.event))
                    if (state.getIn(["EVENTS_ARRAY",action.event,"likes"]).indexOf(defaultUser)<0){
                        var second = first.updateIn(["EVENTS_ARRAY",action.event,"likes"], List => List.push(defaultUser))
                    return second;
                }
                return first;
            }
        return state;
        case USER_LOGIN:
            for(let i=0; i<state.getIn(["USERS_ARRAY"]).size; i++) {
                if (state.getIn(["USERS_ARRAY",i,"userName"])===(state.getIn(["USER_NAME"]))){
                    return state.updateIn(["DEFAULT_USER"],value => i)
                }
            }
            return state
        case TYPE_USERNAME:
            return state.updateIn(["USER_NAME"],value => action.username)
        default:
            return state
    }
}

export default combinedReducers
