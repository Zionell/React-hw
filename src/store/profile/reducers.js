import {REMOVE_USERS_ACTION, USERS_ACTION} from "./actions";

const initialState = {
    users: [{
        id: 0,
        name: "User Profile",
        email: "user@gmail.com",
        phone: "+7-999-999-99 99"
    }]
}

export const reducerUsers = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USERS_ACTION:
            return {
                ...state,
                users: [...state.users, ...payload.data]
            }
        case REMOVE_USERS_ACTION:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload.data),
            }
        default:
            return state
    }
}