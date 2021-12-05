import {POSTS_ACTION, PRELOAD_ACTION, RELOAD_ACTION} from "./actions";


const initialState = {
    posts: [],
    preloader: false,
    reload: false
}

export const reducerPosts = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POSTS_ACTION:
            return {
                ...state,
                posts: [...payload]
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