import React from "react";
import "./Message.scss"

export const Message = ({messages}) => {
    const messageTemplate = messages.map(message => {
        return (
            <p className={message.author === "bot" ? "bot" : "user"} key={message.id}>{message.text}</p>)
    });
    return (
        <div className="messages castom__scroll">
            {messageTemplate}
        </div>
    )
}