export const PRELOAD_ACTION = "PRELOAD_ACTION"
export const RELOAD_ACTION = "RELOAD_ACTION"
export const POSTS_ACTION = "POSTS_ACTION"

export const actionPosts = (type, data) => {
    return {
        type: type,
        payload: data
    }
}
export const actionLoadPosts = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const addPostsWithThunk = (id) => (dispatch) => {
    dispatch(actionLoadPosts(PRELOAD_ACTION, true))
    dispatch(actionLoadPosts(RELOAD_ACTION, false))
    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${id ? 'userId=' + id : 'id100'}`);
            const result = await response.json();
            dispatch(actionPosts(POSTS_ACTION, result))
        } catch (e) {
            dispatch(actionLoadPosts(RELOAD_ACTION, true))
            console.error(e.message)
        } finally {
            dispatch(actionLoadPosts(PRELOAD_ACTION, false))
        }
    };
    fetchData();
}