import React, {useEffect, useState} from 'react';
import "../components/style/ProfilePage.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import preloader from "../utils/icons8-rhombus-loader.gif"
import {useSelector} from "react-redux";

export const Profile = () => {
    const [preload, setPreload] = useState(true);
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    const user = useSelector((store) => store.users[id ? id : 0]);
    const navigate = useNavigate();
    if (id > 10) {
        navigate("/profile", {replace: true});
    }
    useEffect(() => {
        let isMounted = true;
        const fetchPosts = async () => {
            try {
                const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?${id ? 'userId=' + id : 'id100'}`);
                const result = await responsePosts.json();
                if (isMounted) {
                    setPosts(result);
                    setPreload(false)
                }
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchPosts();
        return () => {
            isMounted = false
        }
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
                {preload && <img className="posts__preload" src={preloader} alt="preloader"/>}
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