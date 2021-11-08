import './App.css';
import {Message} from "./components/message/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/form/Form";
import {v4 as uuidv4} from 'uuid';
import {Button} from "@mui/material";
import {ChatsList} from "./components/chatsList/ChatsList";
import {useStyles} from "./components/style/style";


function App() {
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);
    const [changeClass, setChangeClass] = useState(true)
    const [showChats, setShowChats] = useState(false)
    const [botAnswer, setBotAnswer] = useState({})

    const updateMessageList = (newMessage) => {
        setMessageList(messageList => [...messageList, newMessage])
    }

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === "user") {
            const timeOut = setTimeout(() => {
                updateMessageList(botAnswer)
            }, 1000)

            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [messageList]);

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
        return () => { isMounted = false }
    })


    const handleClick = () => {
        setChangeClass(prevValue => !prevValue)
    }

    const handleClickChats = ()=>{
        setShowChats(prevValue => !prevValue)
    }

    return (
        <div className="App">
            <div className="border">
                <div className={changeClass ? "wrapp" : "block"}>
                    {changeClass && <Button className={classes.btn} onClick={handleClickChats}>
                        <img src="https://img.icons8.com/fluency/48/000000/return.png" alt="Back"/>
                    </Button>}
                    {changeClass && showChats && <ChatsList/>}
                    {changeClass && <Message messages={messageList}/>}
                    {changeClass && <Form onSend={updateMessageList}/>}

                </div>
                <div className="circle" onClick={handleClick}/>
            </div>
        </div>
    );
}

export default App;
