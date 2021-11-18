import {MESSAGE_ADD, MESSAGE_PLACE_ADD} from "./actions";
import {v4 as uuidv4} from "uuid";

const initialState = {
    'chat1': [{
        text: "Hi",
        author: "user",
        id: uuidv4()
    }, {
        text: "Hi, man",
        author: "bot",
        id: uuidv4()
    }],
    'chat2': [],
    'chat3': [],
    'chat4': [{
        text: "Hello",
        author: "user",
        id: uuidv4()
    }, {
        text: "Hi, what`s up?",
        author: "bot",
        id: uuidv4()
    }],
    'chat5': [],
    'chat6': [],
    'chat7': [],
    'chat8': [],
    'chat9': [],
    'chat10': [],
}
export const reducerChatsList = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case MESSAGE_ADD:
            return {
                ...state,
                [`chat${payload.id}`]: [...state[`chat${payload.id}`], payload.message]
            }
        case MESSAGE_PLACE_ADD:
            return {
                ...state,
                [`chat${payload}`]: []
            }
        default:
            return state
    }
}