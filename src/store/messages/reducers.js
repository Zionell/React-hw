import {MESSAGE_ADD, MESSAGE_DELETE, MESSAGE_PLACE_ADD} from "./actions";
import {v4 as uuidv4} from "uuid";

const initialState = {
    'chat1': [],
    'chat2': [],
    'chat3': [],
    'chat4': [],
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
        case
        MESSAGE_PLACE_ADD:
            return {
                ...state,
                [`chat${payload}`]: []

            }
        case
        MESSAGE_DELETE:
            const chatsList = {...state}
            delete chatsList[`chat${payload}`]
            return chatsList
        default:
            return state
    }
}