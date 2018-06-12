function USER_NAME(state=immutableState, action){
    switch(action.type){
        case TYPE_USERNAME:
            return immutableState.updateIn(["USER_NAME"],value => action.userName)
        default:
            return state;
    }
}

function EVENTS_ARRAY(state = [event1,event2, event3], action){
    switch(action.type){
        case ADD_GOING:
            if (state[action.event].goings.indexOf(state.DEFAULT_USER)<0){
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

export default combineReducers(
    USER_NAME,
    EVENTS_ARRAY,
    DEFAULT_USER,
    USERS_ARRAY
)