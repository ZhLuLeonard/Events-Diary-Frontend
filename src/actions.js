export const TYPE_USERNAME =  'TYPE_USERNAME'
export const ADD_EVENT = 'ADD_EVENT'
export const USER_LOGIN = "USER_LOGIN"
export const ADD_GOING = "ADD_GOING"
export const ADD_LIKE = "ADD_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"
export const REMOVE_GOING = "REMOVE_GOING"

export function userSetup(username){
    return { type: TYPE_USERNAME, username }
}

export function addEvent(event){
    return { type: ADD_EVENT, event }
}

export function userLogin(){
    return {type: USER_LOGIN}
}

export function addGoing(event){
    return {type: ADD_GOING, event}
}

export function addLike(event){
    return {type: ADD_LIKE, event}
}

export function removeLike(event) {
    return {type: REMOVE_LIKE, event}
}

export function removeGoing(event) {
    return {type: REMOVE_GOING, event}
}