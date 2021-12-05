import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducerUsers} from "./profile/reducers";
import {reducerChatsList} from "./messages/reducers";
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducerPosts} from "./posts/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['users']
}

const rootReducer = combineReducers({
    users: reducerUsers,
    chats: reducerChatsList,
    posts:reducerPosts
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store);
