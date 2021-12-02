import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import {NavBar} from "./components/navBar/NavBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserID} from "./store/user/selectors";
import {addUsersWithThunk} from "./store/profile/actions";

function App() {
    const [changeClass, setChangeClass] = useState(true);
    const userId = useSelector(getUserID)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addUsersWithThunk(userId))
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
