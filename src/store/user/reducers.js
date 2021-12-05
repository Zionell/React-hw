import {SET_USER} from "./actions";

const initialState = {
    user_id: null,
    user_name: '',
    user_email: ''
}

export const reducerUser = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user_id: payload.user_id,
                user_email: payload.user_email,
                user_name: payload.user_name,
            }
        default:
            return state
    }
}