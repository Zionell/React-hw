import React, {useState} from 'react';
import style from './FormUser.module.scss'
import {getUserRefById} from "../../firebase";
import {set} from "firebase/database";
import {useDispatch, useSelector} from "react-redux";
import {getUserID} from "../../store/user/selectors";
import {actionUser, SET_USER_NAME} from "../../store/user/actions";

export const FormUser = ({showModal, setShowModal}) => {
    const dispatch=useDispatch();
    const [newUserName, setNewUserName] = useState('');
    const [newUserPhone, setNewUserPhone] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const userId = useSelector(getUserID)
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            id: userId,
            name: newUserName,
            email: newUserEmail,
            phone: newUserPhone
        }
        set(getUserRefById(userId), user);
        dispatch(actionUser(SET_USER_NAME,newUserName))
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