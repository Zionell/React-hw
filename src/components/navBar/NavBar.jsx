import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.scss"
import {DialogSvg, HomeSvg, ProfileSvg} from "../../utils/Svg";

export const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/">
                        <HomeSvg/>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/dialogs">
                        <DialogSvg/>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/profile">
                        <ProfileSvg/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};