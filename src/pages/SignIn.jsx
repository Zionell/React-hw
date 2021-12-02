import React, {useState} from 'react';
import {SingForm} from "../components/SingForm/SignFrom";
import {sign_in} from "../firebase";
import {useNavigate} from "react-router-dom";
import {actionUser, SET_USER_ID} from "../store/user/actions";
import {useDispatch} from "react-redux";

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const handleSubmit = async (email, password) => {
        try {
            await sign_in(email, password).then(result => dispatch(actionUser(SET_USER_ID,result)));
            navigate('/home', {replace: true})
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
            <SingForm error={error} submit={handleSubmit}/>
        </>
    );
};