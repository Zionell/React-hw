import React, {useEffect, useState} from 'react';
import {Message} from "../components/message/Message";
import {Form} from "../components/form/Form";
import "../components/style/DialogPage.scss"
import {v4 as uuidv4} from "uuid";
import {Link, useNavigate, useParams} from "react-router-dom";

export const Dialogs = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id > 10) {
            navigate("/dialogs", {replace: true});
        }
    }, [id])

    const [messageList, setMessageList] = useState({
        'chat1': [{
            text: "Hi",
            author: "user",
            id: uuidv4()
        }, {
            text: "Hi, man",
            author: "bot",
            id: uuidv4()
        }],
        'chat2': [],
        'chat3': [],
        'chat4': [{
            text: "Hello",
            author: "user",
            id: uuidv4()
        }, {
            text: "Hi, what`s up?",
            author: "bot",
            id: uuidv4()
        }],
        'chat5': [],
        'chat6': [],
        'chat7': [],
        'chat8': [],
        'chat9': [],
        'chat10': [],
    });
    const [botAnswer, setBotAnswer] = useState({});
    const [currentDialog, setCurrentDialog] = useState('');

    const updateMessageList = (newMessage) => {
        setMessageList(prevMessageList => ({
            ...prevMessageList,
            [`chat${id}`]: [...prevMessageList[`chat${id}`], newMessage]
        }))
    };

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const result = await response.json();
                if (isMounted)
                    setCurrentDialog(result)
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchData();
        return () => {
            isMounted = false
        }
    }, [id])

    useEffect(() => {
        if (id && messageList[`chat${id}`].length > 0 && messageList[`chat${id}`][messageList[`chat${id}`].length - 1].author === "user") {
            const timeOut = setTimeout(() => {
                updateMessageList(botAnswer)
            }, 1000)

            return () => {
                clearTimeout(timeOut)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageList[`chat${id}`]]);

    return (
        <div className="dialog">
            <h3 className="dialog__header">{id ? currentDialog.name : "Диалог"}</h3>
            {
                id ? <Message messages={messageList[`chat${id}`]}/> :
                    <Link className="profile__btn" to={"/"}>Выбрать участника</Link>
            }

            <Form onSend={updateMessageList}/>
        </div>
    );
};