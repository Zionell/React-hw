import React, {useState} from 'react';
import style from './FormAddUser.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {actionUsers, ADD_USERS_ACTION} from "../../store/profile/actions";
import {getUserId} from "../../store/profile/selectors";
import {actionMessages, MESSAGE_PLACE_ADD} from "../../store/messages/actions";

export const FormAddUser = ({showModal, setShowModal}) => {
    const [newUserName, setNewUserName] = useState('');
    const [newUserPhone, setNewUserPhone] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const dispatch = useDispatch();
    let userId = useSelector(getUserId)
    const handleSubmit = (e) => {
        e.preventDefault();
        let id = ++userId
        dispatch(actionMessages(MESSAGE_PLACE_ADD, id))
        dispatch(actionUsers(ADD_USERS_ACTION, {
            id: id,
            name: newUserName,
            email: newUserPhone,
            phone: newUserEmail
        }))
        setShowModal(false)
    };
    return (
        <>
            {showModal && <div onClick={e => setShowModal(false)} className={style.modalWrapp}>
                <form onClick={e => e.stopPropagation()} onSubmit={e => handleSubmit(e)}
                      className={style.modalWrappFrom}>
                    <input onChange={e => setNewUserName(e.target.value)} type="text" placeholder='Введите имя'/>
                    <input onChange={e => setNewUserPhone(e.target.value)} type="tel" placeholder='Введите телефон'/>
                    <input onChange={e => setNewUserEmail(e.target.value)} type="email" placeholder='Введите почту'/>
                    <button>Сохранить</button>
                </form>
            </div>}
        </>);
};