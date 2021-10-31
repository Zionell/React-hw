import './App.css';
import {Message} from "./components/message/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/form/Form";

function App() {

    const [messageList, setMessageList] = useState([]);

    const updateMessageList = (newMessage) => {
        setMessageList(messageList => [...messageList, newMessage])
    }

    const newBotMessage = {
        text: "Hello",
        author: "bot"
    }

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === "user")
            setTimeout(() => {
                updateMessageList(newBotMessage)
            }, 1000)
    }, [messageList]);


    return (
        <div className="App">
            <div className="border">
                <div className="wrapp">
                    <Message messages={messageList}/>
                    <Form click={updateMessageList}/>
                </div>
            </div>
        </div>
    );
}

export default App;
