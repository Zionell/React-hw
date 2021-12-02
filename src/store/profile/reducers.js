import {ADD_USERS_ACTION, PRELOAD_ACTION, RELOAD_ACTION, REMOVE_USERS_ACTION, USERS_ACTION} from "./actions";

const initialState = {
    usersList: [],
    preloader: false,
    reload: false
}

export const reducerUsers = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USERS_ACTION:
            return {
                ...state,
                usersList: [...payload]
            }
        case REMOVE_USERS_ACTION:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload),
            }
        case ADD_USERS_ACTION:
            return {
                ...state,
                usersList: [...state.usersList, payload],
            }
        case PRELOAD_ACTION:
            return {
                ...state,
                preloader: payload,
            }
        case RELOAD_ACTION:
            return {
                ...state,
                reload: payload,
            }
        default:
            return state
    }
}