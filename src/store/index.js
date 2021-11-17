import {createStore} from "redux";
import {reducerUsers} from "./profile/reducers";


export const store = createStore(reducerUsers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())