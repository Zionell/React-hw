import React, {useState} from 'react';
import style from './AddNewChat.module.scss'

export const AddNewChat = () => {
    const [NewUserName, setNewUserName] = useState()
    const handleSubmit = () => {

    }
    return (
        <form onClick={e => e.stopPropagation()} onSubmit={e => handleSubmit(e)}
              className={style.wrappForm}>
            <input onChange={e => setNewUserName(e.target.value)} type="text" placeholder='Введите название чата'/>
            <button>Сохранить</button>
        </form>
    );
};