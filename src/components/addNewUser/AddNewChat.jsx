import React, {useState} from 'react';
import style from './AddNewChat.module.scss'
import {set} from "firebase/database";
import {getChatRefById} from "../../firebase";
import {v4 as uuidv4} from 'uuid';

export const AddNewChat = () => {
    const [NewChatName, setNewChatName] = useState('')

    const handleChange = (e) => {
        setNewChatName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        set(getChatRefById(id), {id_chat: id, name_chat: NewChatName});
        setNewChatName('')
    }

    return (
        <form onSubmit={e => handleSubmit(e)}
              className={style.wrappForm}>
            <input onChange={e => handleChange(e)} value={NewChatName} type="text" placeholder='Введите название чата'/>
            <button>Сохранить</button>
        </form>
    );
};