import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./ChatsList.scss"
import preloader from "../../utils/icons8-rhombus-loader.gif";
import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../../store/chats/selectors";
import {getChatsWithThunk} from "../../store/chats/actions";

export const ChatsList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(getChats);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        if (!!chats) {
            setReload(false)
        }else{
            setReload(true)
        }
    }, [chats])


    const handleReload = () => {
        dispatch(getChatsWithThunk)
    }
    const chatsList = chats.map(chat => {
        return (
            <li className='chats__item' key={chat.chat_id}>
                <Link className='chats__link' to={`/dialogs/${chat.chat_id}`}>
                    {chat.chat_name}
                </Link>
            </li>
        )
    });

    return (
        <ul className='chats__list'>
            {reload && <div className='reloader'>Произошла ошибка
                <button onClick={handleReload}>Обновить</button>
            </div>}
            {chatsList}
        </ul>
    )
}
