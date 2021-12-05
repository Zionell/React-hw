import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducerUser} from "./user/reducers";
import {reducerChatsList} from "./chats/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: reducerUser,
    chats: reducerChatsList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store);
