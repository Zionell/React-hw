import React from 'react';
import "../components/style/ProfilePage.scss"
import { useSelector} from "react-redux";
import { sign_out} from "../firebase";
import {getUserEmail, getUserName} from "../store/user/selectors";

export const Profile = () => {
    const userEmail = useSelector(getUserEmail)
    const userName = useSelector(getUserName)

    const handleSignOut = async () => {
        try {
            await sign_out()
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="profile castom__scroll">
            <img onClick={handleSignOut} className="profile__sign-out"
                 src="https://img.icons8.com/ios/50/000000/exit.png" alt='Avatar'/>
            <div className="profile__info">
                <img className="profile__avatar"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png"
                     alt="avatar"/>
                <h3 className="profile__name">{userName}</h3>
                <p className="profile__contacts">Email: {userEmail}</p>
            </div>
        </div>
    );
};