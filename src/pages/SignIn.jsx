import React, {useState} from 'react';
import {SingForm} from "../components/SingForm/SignFrom";
import {useNavigate} from "react-router-dom";
import {getUserWithThunk} from "../store/user/actions";
import {useDispatch} from "react-redux";
import {sign_in} from "../firebase";

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleSubmit = async (name, email, password) => {
        try {
            await sign_in(email, password).then(result => dispatch(getUserWithThunk(result.user.uid)));
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