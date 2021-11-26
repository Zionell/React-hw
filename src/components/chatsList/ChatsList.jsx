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
                <Link className='chats__link' to={`/profile/${user.id}`}>
                    {user.name}
                </Link>
                <Link className='chats__link' to={`/dialogs/${user.id}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11Z"
                        />
                    </svg>
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
