import React, {useEffect} from 'react';
import {ChatsList} from "../components/chatsList/ChatsList";
import {AddNewChat} from "../components/addNewUser/AddNewChat";
import {useDispatch} from "react-redux";
import {getChatsWithThunk} from "../store/chats/actions";

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChatsWithThunk)
    }, [])

    return (
        <div className="home castom__scroll">
            <ChatsList/>
            <AddNewChat/>
        </div>
    );
};
