import React from 'react';
import {ChatsList} from "../components/chatsList/ChatsList";
import {useDispatch, useSelector} from "react-redux"
import {actionUsers, REMOVE_USERS_ACTION} from "../store/profile/actions";

export const Home = () => {
    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(actionUsers(REMOVE_USERS_ACTION, id))
    }

    return (
        <div className="home castom__scroll">
            <ChatsList remove={removeUser} users={users.filter(user => user.id !== 0)}/>
        </div>
    );
};
