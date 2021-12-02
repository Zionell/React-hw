import React from 'react';
import {ChatsList} from "../components/chatsList/ChatsList";
import {useDispatch, useSelector} from "react-redux"
import {actionUsers,  REMOVE_USERS_ACTION} from "../store/profile/actions";
import {getUsers} from "../store/profile/selectors";
import {actionMessages, MESSAGE_DELETE} from "../store/messages/actions";
import {AddNewChat} from "../components/addNewUser/AddNewChat";

export const Home = () => {
    const usersList = useSelector(getUsers);
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(actionUsers(REMOVE_USERS_ACTION, id))
        dispatch(actionMessages(MESSAGE_DELETE, id))
    }

    return (
        <div className="home castom__scroll">
            <ChatsList remove={removeUser} users={usersList}/>
            <AddNewChat/>
        </div>
    );
};
