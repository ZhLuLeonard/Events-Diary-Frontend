export const TYPE_USERNAME =  'TYPE_USERNAME'
export const LOG_IN = "LOG_IN"

export function userSetup(username){
    return { type: TYPE_USERNAME, username }
}

export function userLogin(){
    return { type: LOG_IN}
}