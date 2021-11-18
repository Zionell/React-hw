import {combineReducers, createStore} from "redux";
import {reducerUsers} from "./profile/reducers";
import {reducerChatsList} from "./messages/reducers";


export const store = createStore(
    combineReducers({
        users: reducerUsers,
        chats: reducerChatsList
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())