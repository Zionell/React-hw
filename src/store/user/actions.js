import {onValue} from "firebase/database";
import {getUserRefById} from "../../firebase";

export const SET_USER = "USER::SET_USER"

export const actionUser = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const getUserWithThunk = (id) => async (dispatch) => {
    await onValue(getUserRefById(id), (snapshot) => {
        dispatch(actionUser(SET_USER,snapshot.val()))
    })
}