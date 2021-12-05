import {GET_CHATS} from "./actions";


const initialState = {
    chats: []
}

export const reducerChatsList = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHATS:
            return {
                ...state,
                chats: [...payload],
            }
        default:
            return state
    }
}