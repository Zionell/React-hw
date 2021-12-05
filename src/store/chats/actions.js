import {chatsRef} from "../../firebase";
import {onValue} from "firebase/database";


export const GET_CHATS = "CHATS::GET_CHATS"


export const actionChats = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const getChatsWithThunk = async (dispatch) => {
    await onValue(chatsRef, (snapshot) => {
        const chats = snapshot.val() || {};
        dispatch(actionChats(GET_CHATS, Object.keys(chats).map((obj, i) => {
            return {
                chat_name: chats[obj].name_chat,
                chat_id: chats[obj].id_chat
            }
        })))
    })
}