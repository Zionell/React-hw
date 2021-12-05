import React, {useEffect, useRef, useState} from "react";
import "./Form.scss"
import {v4 as uuidv4} from 'uuid';
import {Button, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import { useSelector} from "react-redux";
import {push} from "firebase/database";
import {getUserName} from "../../store/user/selectors";
import {getChatMsgsListRefById} from "../../firebase";

export const Form = () => {
    const {id} = useParams();
    const [messageValue, setMessageValue] = useState('');
    const inputRef = useRef();
    const userName = useSelector(getUserName)

    const handleChange = e => {
        setMessageValue(e.target.value)
    }

    const handlerClick = event => {
        event.preventDefault();
        push(getChatMsgsListRefById(id), {
            text: messageValue,
            name: userName,
            id: uuidv4()
        });
        setMessageValue('')
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form className="messages__input" onSubmit={handlerClick}>
            <TextField disabled={!id} inputRef={inputRef} id="outlined-basic" fullWidth label="Написать"
                       value={messageValue} onChange={handleChange} variant="standard"/>
            <Button disabled={!id} variant="contained" type="submit">
                <svg
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6.10352e-05" width="32" height="32" rx="4"/>
                    <path d="M21.6668 10.3334L14.3335 17.6667"/>
                    <path d="M21.6668 10.3334L17.0002 23.6667L14.3335 17.6667L8.3335 15L21.6668 10.3334Z"
                    />
                </svg>
            </Button>
        </form>
    )
}