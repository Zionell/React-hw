import React, { useState} from "react";
import "./Form.scss"

export const Form = ({click}) => {

    const [messageValue, setMessageValue] = useState('');

    const handleChange = e => {
        setMessageValue(e.target.value)
    }

    const newMessage = {
        text: messageValue,
        author: "user",
    }

    const handlerClick = event => {
        event.preventDefault();
        click(newMessage)
        setMessageValue('')
    }
    return (
        <form className="messages__input" onSubmit={handlerClick}>
            <input type="text" value={messageValue} onChange={handleChange} placeholder="Написать"/>
            <button type="submit">
                <svg
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6.10352e-05" width="32" height="32" rx="4"/>
                    <path d="M21.6668 10.3334L14.3335 17.6667"/>
                    <path d="M21.6668 10.3334L17.0002 23.6667L14.3335 17.6667L8.3335 15L21.6668 10.3334Z"
                    />
                </svg>
            </button>
        </form>
    )
}