import React from 'react';
import {Link} from "react-router-dom";

export const Error = () => {
    return (
        <div className="error">
            <h3>Такой страницы не существует</h3>
            <Link to="/home">На главную</Link>
        </div>
    );
};