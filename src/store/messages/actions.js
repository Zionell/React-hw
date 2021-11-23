export const MESSAGE_ADD = "MESSAGE_ADD"
export const MESSAGE_PLACE_ADD = "MESSAGE_PLACE_ADD"
export const MESSAGE_DELETE = "MESSAGE_DELETE"


export const actionMessages = (type, data) => {
    return {
        type: type,
        payload: data
    }
}