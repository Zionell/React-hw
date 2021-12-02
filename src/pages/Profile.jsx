import React, {useEffect, useState} from 'react';
import "../components/style/ProfilePage.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import preloader from "../utils/icons8-rhombus-loader.gif"
import {useDispatch, useSelector} from "react-redux";
import {getPosts, getPreloaderPosts, getReloaderPosts} from "../store/posts/selectors";
import {addPostsWithThunk} from "../store/posts/actions";
import {getUserRefById, sign_out, userRef} from "../firebase";
import {onValue, set} from "firebase/database";
import {FormUser} from "../components/formAddUser/FormUser";
import {getUserID} from "../store/user/selectors";

export const Profile = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const userId = useSelector(getUserID)
    const [user, setUser] = useState({})
    const preload = useSelector(getPreloaderPosts)
    const reload = useSelector(getReloaderPosts)
    const posts = useSelector(getPosts)
    const {id} = useParams();

    useEffect(() => {
        const unsubscribe = onValue(getUserRefById(id ? id : userId), (snapshot) => {
            const userData = snapshot.val();
            setUser(userData || "");
        });

        return unsubscribe;
    }, [id])

    const handleSignOut = async () => {
        try {
            await sign_out()
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleReload = () => {
        dispatch(addPostsWithThunk())
    }

    useEffect(() => {
        dispatch(addPostsWithThunk(id))
    }, [id]);

    return (
        <div className="profile castom__scroll">
            <img onClick={handleSignOut} className="profile__sign-out"
                 src="https://img.icons8.com/ios/50/000000/exit.png"/>
            <div className="profile__info">
                <img className="profile__avatar"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png"
                     alt="avatar"/>
                {user ? <><h3 className="profile__name">{user?.name}</h3>
                        <p className="profile__contacts">Email: {user?.email}</p>
                        <p className="profile__contacts">Phone: {user?.phone}</p></> :
                    <h3 onClick={() => setShowModal(true)} className="profile__edit-name">Редактировать</h3>}
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
                            <h4 className="posts__item-title">{post?.title}</h4>
                            <p className="posts__item-text">{post?.body}</p>
                        </div>)
                    })
                }
            </div>
            <FormUser setShowModal={setShowModal} showModal={showModal}/>
        </div>
    );
};