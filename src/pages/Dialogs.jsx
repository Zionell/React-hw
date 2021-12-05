import React, {useEffect, useState} from 'react';
import {Message} from "../components/message/Message";
import {Form} from "../components/form/Form";
import "../components/style/DialogPage.scss"
import {Link, useParams} from "react-router-dom";
import {onValue} from "firebase/database";
import {getChatMsgsListRefById, getChatRefById} from "../firebase";

export const Dialogs = () => {
    const {id} = useParams();
    const [currentDialog, setCurrentDialog] = useState('');
    const [messageList, setMessageList] = useState([])

    useEffect(async () => {
        await onValue(getChatRefById(id), (snapshot) => {
            setCurrentDialog(snapshot.val())
        });
    }, [])

    useEffect(async () => {
        if (id) {
            await onValue(getChatMsgsListRefById(id), (snapshot) => {
                if(snapshot.val()){
                    setMessageList(Object.keys(snapshot.val()).map((obj, i) => {
                        return snapshot.val()[obj]
                    }))
                }
            });
        }
    }, [])

    return (
        <div className="dialog">
            <h3 className="dialog__header">{id && currentDialog ? currentDialog.name_chat : "Диалог"}</h3>
            {
                id ? <Message messages={messageList}/> :
                    <Link className="profile__btn" to={"/home"}>Выбрать чат</Link>
            }

            <Form/>
        </div>
    );
};