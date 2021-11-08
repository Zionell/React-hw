import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useStyles} from "../style/style";
import React, {useEffect, useState} from "react";


export const ChatsList = () => {
    const classes = useStyles();
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
        return () => { isMounted = false }
    })

    const chats = users.map(user => {
        return (
            <ListItem disablePadding  key={user.id}>
                <ListItemButton>
                    <ListItemText primary={user.name}/>
                </ListItemButton>
            </ListItem>
        )
    });

    return (
        <List className={classes.list}>
            {chats}
        </List>
    )
}
