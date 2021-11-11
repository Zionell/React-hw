import React, {useEffect, useState} from 'react';
import {ChatsList} from "../components/chatsList/ChatsList";

export const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                if (isMounted)
                    setUsers(result)
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchData();
        return () => {
            isMounted = false
        }
    }, [])

    const removeUser = (id) => {
        setUsers(users => users.filter(user => user.id !== id ? user : ''))
    }


    return (
        <div className="home castom__scroll">
            <ChatsList remove={removeUser} users={users}/>
        </div>
    );
};
