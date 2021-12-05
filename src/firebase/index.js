import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {getDatabase, ref} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBAfYvrPWlgn_9sHRjrI3Hd8RsOoN5tC1A",
    authDomain: "mobile-chat-e304c.firebaseapp.com",
    projectId: "mobile-chat-e304c",
    storageBucket: "mobile-chat-e304c.appspot.com",
    messagingSenderId: "747979112668",
    appId: "1:747979112668:web:0dbeb08f1cd54ffb8d7419"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

export const sign_up = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass)
export const sign_in = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)
export const sign_out = async () => await signOut(auth)
export const status = async (user) => await onAuthStateChanged(auth, user)

export const db = getDatabase(firebaseApp)
export const userRef = ref(db, 'users')
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getUserRefById = (id) => ref(db, `users/user_${id}`);
export const getChatRefById = (id) => ref(db, `chats/chat_${id}`);
export const getChatMsgsRefById = (id) => ref(db, `messages/messages_list_${id}`);
export const getChatMsgsListRefById = (id) => ref(db, `messages/messages_list_${id}/messageList`);