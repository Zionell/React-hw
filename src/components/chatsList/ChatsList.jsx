import React from "react";
import {Link} from "react-router-dom";
import "./ChatsList.scss"
import preloader from "../../utils/icons8-rhombus-loader.gif";
import {useDispatch, useSelector} from "react-redux";
import {addUsersWithThunk} from "../../store/profile/actions";
import {getPreloaderUsers, getReloaderUsers} from "../../store/profile/selectors";

export const ChatsList = ({users, remove}) => {
    const dispatch = useDispatch();
    const preload = useSelector(getPreloaderUsers)
    const reload = useSelector(getReloaderUsers)

    const handleReload = () => {
        dispatch(addUsersWithThunk())
    }

    const chats = users.map(user => {
        return (
            <li className='chats__item' key={user.id}>
                <Link className='chats__link' to={`/dialogs/${user.id}`}>
                    {user.name}
                </Link>
                <button onClick={() => {
                    remove(user.id)
                }} className="chats__item-btn">X
                </button>
            </li>
        )
    });

    return (
        <ul className='chats__list'>
            {preload && <img className="preloader" src={preloader} alt="preloader"/>}
            {reload && <div className='reloader'>Произошла ошибка
                <button onClick={handleReload}>Обновить</button>
            </div>}
            {chats}
        </ul>
    )
}
