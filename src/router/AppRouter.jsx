import {useRoutes} from "react-router-dom";
import {routes} from "./routes";

export const AppRouter = () => {
    return useRoutes(routes);
};