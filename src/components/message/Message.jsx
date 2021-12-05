import React from "react";
import "./Message.scss"

export const Message = ({messages}) => {
    console.log(messages)
    const messageTemplate = messages?.map(message => {
        return (
            <div className="message" key={message.id}>
                <p className="message__text">{message.text}</p>
                <p className="message__author">{message.name}</p>
            </div>
        )
    });
    return (
        <div className="messages castom__scroll">
            {messageTemplate}
        </div>
    )
}