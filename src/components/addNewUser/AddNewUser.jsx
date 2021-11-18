import React from 'react';
import style from './AddNewUser.module.scss'

export const AddNewUser = ({setShowModal}) => {
    return (
        <button onClick={() => setShowModal(true)} className={style.wrapp}>
            +
        </button>
    );
};