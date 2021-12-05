import React, {useEffect} from 'react';
import "../components/style/ProfilePage.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import preloader from "../utils/icons8-rhombus-loader.gif"
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/profile/selectors";
import {getPosts, getPreloaderPosts, getReloaderPosts} from "../store/posts/selectors";
import {addPostsWithThunk} from "../store/posts/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const preload = useSelector(getPreloaderPosts)
    const reload = useSelector(getReloaderPosts)
    const posts = useSelector(getPosts)
    const {id} = useParams();
    const user = useSelector(getUser(id ? id : 0));
    const navigate = useNavigate();
    if (id > 10) {
        navigate("/profile", {replace: true});
    }

    const handleReload = () => {
        dispatch(addPostsWithThunk())
    }

    useEffect(() => {
        dispatch(addPostsWithThunk(id))
    }, [id]);

    return (
        <div className="profile castom__scroll">
            <div className="profile__info">
                <img className="profile__avatar"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png"
                     alt="avatar"/>
                <h3 className="profile__name">{user.name}</h3>
                <p className="profile__contacts">Email: {user.email}</p>
                <p className="profile__contacts">Phone: {user.phone}</p>
                {id && <Link className="profile__btn" to={`/dialogs/${id}`}>Написать</Link>}
            </div>
            <div className="posts">
                <h3 className="posts__title">Посты</h3>
                {preload && <img className="preloader" src={preloader} alt="preloader"/>}
                {reload && <div className='reloader'>Произошла ошибка
                    <button onClick={handleReload}>Обновить</button>
                </div>}
                {
                    posts.map(post => {
                        return (<div className="posts__item" key={post.id}>
                            <h4 className="posts__item-title">{post.title}</h4>
                            <p className="posts__item-text">{post.body}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};