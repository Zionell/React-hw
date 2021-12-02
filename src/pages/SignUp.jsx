import React, {useState} from 'react';
import {SingForm} from "../components/SingForm/SignFrom";
import {getChatRefById, sign_up} from "../firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionUser, SET_USER_ID} from "../store/user/actions";
import {set} from "firebase/database";

export const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const handleSubmit = async (email, password) => {
        try {
            await sign_up(email, password).then(result => {
                dispatch(actionUser(SET_USER_ID, result))
                let chat = {
                    id: result.user.uid,
                }
                set(getChatRefById(result.user.uid), chat);
            });
            navigate('/profile', {replace: true})
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <SingForm error={error} show submit={handleSubmit}/>
        </>
    );
};