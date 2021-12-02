import {useNavigate, useRoutes} from "react-router-dom";
import {routes} from "./routes";
import {status} from "../firebase";
import {useEffect} from "react";

export const AppRouter = () => {
    const navigate = useNavigate();
    useEffect(async () => {
        try {
            await status((user) => {
                if (!user) {
                    navigate('/sign-up', {replace: true})
                }
            })
        } catch (error) {
            console.log(error.message);
        }

    }, [status]);
    return useRoutes(routes);
};