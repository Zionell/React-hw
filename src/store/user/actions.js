export const SET_USER_ID = "USER::SET_USER_ID"
export const SET_USER_NAME = "USER::SET_USER_NAME"

export const actionUser = (type, data) => {
    return {
        type: type,
        payload: data
    }
}