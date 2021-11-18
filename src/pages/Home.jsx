import React, {useState} from 'react';
import {ChatsList} from "../components/chatsList/ChatsList";
import {useDispatch, useSelector} from "react-redux"
import {actionUsers, REMOVE_USERS_ACTION} from "../store/profile/actions";
import {getUsers} from "../store/profile/selectors";
import {AddNewUser} from "../components/addNewUser/AddNewUser";
import {FormAddUser} from "../components/formAddUser/FormAddUser";

export const Home = () => {
    const usersList = useSelector(getUsers);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const removeUser = (id) => {
        dispatch(actionUsers(REMOVE_USERS_ACTION, id))
    }

    return (
        <div className="home castom__scroll">
            <ChatsList remove={removeUser} users={usersList.filter(user => user.id !== 0)}/>
            <AddNewUser setShowModal={setShowModal}/>
            <FormAddUser setShowModal={setShowModal} showModal={showModal}/>
        </div>
    );
};
