import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./SignForm.scss"

export const SingForm = ({submit, show, error}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(name, email, password)
    };

    return (
        <form className="sign-form" onSubmit={handleSubmit}>
            {show && <input
                placeholder="Name"
                name="name"
                type="text"
                required
                onChange={handleNameChange}
                value={name}
            />}
            <input
                placeholder="Email"
                name="email"
                type="email"
                required
                onChange={handleEmailChange}
                value={email}
            />
            <input
                placeholder="Password"
                name="password"
                required
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