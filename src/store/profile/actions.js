import {onValue} from "firebase/database";
import {userRef} from "../../firebase";

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

export const addUsersWithThunk = (userId) => (dispatch) => {
    dispatch(actionLoadUsers(PRELOAD_ACTION, true))
    dispatch(actionLoadUsers(RELOAD_ACTION, false))
    const fetchData = async () => {
        try {
            await onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (!!userData) {
                    const users = Object.keys(userData).filter(obj => obj !== `user_${userId}`).map(obj => {
                        return userData[obj]
                    })
                    dispatch(actionUsers(USERS_ACTION, users))
                }
            });
        } catch (e) {
            dispatch(actionLoadUsers(RELOAD_ACTION, true))
            console.error(e.message)
        } finally {
            dispatch(actionLoadUsers(PRELOAD_ACTION, false))
        }
    };
    fetchData();
}