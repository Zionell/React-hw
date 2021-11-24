export const USERS_ACTION = "USERS_ACTION"
export const REMOVE_USERS_ACTION = "REMOVE_USERS_ACTION"
export const ADD_USERS_ACTION = "ADD_USERS_ACTION"


export const actionUsers = (type, data) => {
    return {
        type: type,
        payload: data
    }
}