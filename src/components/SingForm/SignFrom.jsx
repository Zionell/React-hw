import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./SignForm.scss"

export const SingForm = ({submit, show, error}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(email, password)
    };

    return (
        <form className="sign-form" onSubmit={handleSubmit}>
            <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleEmailChange}
                value={email}
            />
            <input
                placeholder="Password"
                name="password"
                onChange={handlePassChange}
                value={password}
                type="password"
            />
            {error && <p className="sign-form__error">{error}</p>}
            <button type="submit">Submit</button>
            {show && <><p className="sign-form__text">Уже есть аккаунт?</p><Link to="/sign-in">Sign in</Link></>}
        </form>
    );
}