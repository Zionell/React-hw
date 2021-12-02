import {SET_USER_ID, SET_USER_NAME} from "./actions";


const initialState = {
    users_id: null,
    user_name:''
}

export const reducerUser = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_USER_ID:
            return {
                ...state,
                users_id: payload.user.uid
            }
        case SET_USER_NAME:
            return {
                ...state,
                user_name: payload
            }
        default:
            return state
    }
}