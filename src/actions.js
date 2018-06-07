export const TYPE_USERNAME =  'TYPE_USERNAME'
export const ADD_EVENT = 'ADD_EVENT'

export function userSetup(username){
    return { type: TYPE_USERNAME, username }
}

export function addEvent(event){
    return { type: ADD_EVENT, event }
}