import React, {useState} from "react";
import "./Message.scss"

export const Message = ({messages}) => {
    let id = 0;
    const messageTemplate = messages.map(message => {
        return (
            <p className={message.author === "bot" ? "bot" : "user"} key={message.text + id++}>{message.text}</p>)
    });
    return (
        <div className="messages castom__scroll">
            {messageTemplate}
        </div>
    )
}