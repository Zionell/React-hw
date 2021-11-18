import React, {useEffect, useState} from 'react';
import {Message} from "../components/message/Message";
import {Form} from "../components/form/Form";
import "../components/style/DialogPage.scss"
import {v4 as uuidv4} from "uuid";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserId} from "../store/profile/selectors";
import {getChat} from "../store/messages/selectors";
import {actionMessages, MESSAGE_ADD} from "../store/messages/actions";

export const Dialogs = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const userId = useSelector(getUserId)
    useEffect(() => {
        if (id > userId) {
            navigate("/dialogs", {replace: true});
        }
    }, [id])

    const currentDialog = useSelector(getUser(id ? id : 0));
    const chat = useSelector(getChat(id ? id : 0));
    const dispatch = useDispatch();

    const [botAnswer, setBotAnswer] = useState({});

    useEffect(() => {
        if (id && chat.length > 0 && chat[chat.length - 1].author === "user") {
            const timeOut = setTimeout(() => {
                dispatch(actionMessages(MESSAGE_ADD, {message: botAnswer, id: id}))
            }, 1000)

            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [botAnswer]);

    useEffect(() => {
        let isMounted = true;
        const fetchBotAnswers = async () => {
            try {
                const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
                const result = await response.json();
                if (isMounted)
                    setBotAnswer({
                        text: result.joke,
                        author: "bot",
                        id: uuidv4()
                    })
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchBotAnswers();
        return () => {
            isMounted = false
        }
    }, [chat]);

    return (
        <div className="dialog">
            <h3 className="dialog__header">{id ? currentDialog.name : "Диалог"}</h3>
            {
                id ? <Message messages={chat}/> :
                    <Link className="profile__btn" to={"/"}>Выбрать участника</Link>
            }

            <Form/>
        </div>
    );
};