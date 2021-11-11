import {Home} from "../pages/Home";
import {Profile} from "../pages/Profile";
import {Dialogs} from "../pages/Dialogs";
import React from "react";
import {Error} from "../pages/Error";

export const routes = [
    {
        path: '/',
        element: <Home/>,
    }, {
        path: '/dialogs',
        element: <Dialogs/>,
        children: [
            {
                path: ':id',
                element: <Dialogs/>,
            },
        ],
    }, {
        path: '/profile',
        element: <Profile/>,
        children: [
            {
                path: ':id',
                element: <Profile/>,
            },
        ],
    },{
        path: '/*',
        element: <Error/>,
    },
]