import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import {NavBar} from "./components/navBar/NavBar";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {actionUsers, USERS_ACTION} from "./store/profile/actions";

function App() {
    const [changeClass, setChangeClass] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                if (isMounted) {
                    dispatch(actionUsers(USERS_ACTION, result))
                }
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchData();
        return () => {
            isMounted = false
        }
    }, [])

    const handleClick = () => {
        setChangeClass(!changeClass)
    };

    return (
        <BrowserRouter>
            <div className="App">
                <div className="border">
                    <div className={changeClass ? "wrapp" : "block"}>
                        {changeClass && <AppRouter/>}
                        {changeClass && <NavBar/>}
                    </div>
                    <div className="circle" onClick={handleClick}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
