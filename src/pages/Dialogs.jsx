import React, {useEffect} from 'react';
import {Message} from "../components/message/Message";
import {Form} from "../components/form/Form";
import "../components/style/DialogPage.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserId} from "../store/profile/selectors";
import {getChat} from "../store/messages/selectors";
import {addMessageWithThunk} from "../store/messages/actions";
import {onValue} from "firebase/database";
import {getChatRefById, getUserRefById} from "../firebase";

export const Dialogs = () => {
    const {id} = useParams();
    const userId = useSelector(getUserId)
    const currentDialog = useSelector(getUser(id ? id : 0));
    const chat = useSelector(getChat(id ? id : 0));
    const dispatch = useDispatch();

    useEffect(async () => {
        await onValue(getChatRefById(id ? id : userId), (snapshot) => {
            console.log(snapshot.val())
        });
    }, [])

    useEffect(() => {
        dispatch(addMessageWithThunk(id, chat))
    }, [chat]);

    return (
        <div className="dialog">
            <h3 className="dialog__header">{id && currentDialog ? currentDialog.name : "Диалог"}</h3>
            {
                id ? <Message messages={chat}/> :
                    <Link className="profile__btn" to={"/home"}>Выбрать участника</Link>
            }

            <Form/>
        </div>
    );
};