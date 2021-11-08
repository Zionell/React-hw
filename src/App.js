import './App.css';
import {Message} from "./components/message/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/form/Form";
import {v4 as uuidv4} from 'uuid';

const newBotMessage = {
    text: "Hello",
    author: "bot",
    id: uuidv4()
}

function App() {

    const [messageList, setMessageList] = useState([]);

    const updateMessageList = (newMessage) => {
        setMessageList(messageList => [...messageList, newMessage])
    }

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === "user") {
            const timeOut = setTimeout(() => {
                updateMessageList(newBotMessage)
            }, 1000)

            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [messageList]);


    const [changeClass, setChangeClass] = useState(true)

    const handleClick = () => {
        setChangeClass(prevValue => !prevValue)
    }

    return (
        <div className="App">
            <div className="border">
                <div className={changeClass ? "wrapp" : "block"}>
                    {changeClass && <Message messages={messageList}/>}
                    {changeClass && <Form onSend={updateMessageList}/>}
                </div>
                <div className="circle" onClick={handleClick}/>
            </div>
        </div>
    );
}

export default App;
