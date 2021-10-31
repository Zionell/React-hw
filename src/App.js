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

    const [changeClass, setChanhgeClass] = useState(true)

    const handleClick = () => {
        setChanhgeClass(prevValue => !prevValue)
    }

    return (
        <div className="App">
            <div className="border">
                <div className={changeClass ? "wrapp" : "block"}>
                    {changeClass && <Message messages={messageList}/>}
                    {changeClass && <Form click={updateMessageList}/>}
                </div>
                <div className="circle" onClick={handleClick}></div>
            </div>
        </div>
    );
}

export default App;
