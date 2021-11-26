export const USERS_ACTION = "USERS_ACTION"
export const REMOVE_USERS_ACTION = "REMOVE_USERS_ACTION"
export const ADD_USERS_ACTION = "ADD_USERS_ACTION"
export const PRELOAD_ACTION = "PRELOAD_ACTION"
export const RELOAD_ACTION = "RELOAD_ACTION"

export const actionUsers = (type, data) => {
    return {
        type: type,
        payload: data
    }
}
export const actionLoadUsers = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const addUsersWithThunk = () => (dispatch) => {
    dispatch(actionLoadUsers(PRELOAD_ACTION, true))
    dispatch(actionLoadUsers(RELOAD_ACTION, false))
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            dispatch(actionUsers(USERS_ACTION, result))
        } catch (e) {
            dispatch(actionLoadUsers(RELOAD_ACTION, true))
            console.error(e.message)
        } finally {
            dispatch(actionLoadUsers(PRELOAD_ACTION, false))
        }
    };
    fetchData();
}