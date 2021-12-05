import React, {useState} from 'react';
import {SingForm} from "../components/SingForm/SignFrom";
import {getUserRefById, sign_up} from "../firebase";
import {useNavigate} from "react-router-dom";
import {set} from "firebase/database";
import {getUserWithThunk} from "../store/user/actions";
import {useDispatch} from "react-redux";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleSubmit = async (name, email, password) => {
        try {
            await sign_up(email, password).then(result => {
                dispatch(getUserWithThunk(result.user.uid));
                set(getUserRefById(result.user.uid), {
                    user_name: name,
                    user_email: email,
                    user_id: result.user.uid
                })
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