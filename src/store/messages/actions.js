import {v4 as uuidv4} from "uuid";

export const MESSAGE_ADD = "MESSAGE_ADD"
export const MESSAGE_PLACE_ADD = "MESSAGE_PLACE_ADD"
export const MESSAGE_DELETE = "MESSAGE_DELETE"


export const actionMessages = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const addMessageWithThunk = (id, data) => (dispatch) => {
    if (data && id && data.length > 0 && data[data.length - 1].author === "user") {
        const fetchBotAnswers = async () => {
            try {
                const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
                const result = await response.json();
                dispatch(actionMessages(MESSAGE_ADD, {
                    message: {
                        text: result.joke,
                        author: "bot",
                        id: uuidv4()
                    },
                    id: id
                }))
            } catch (e) {
                console.error(e.message)
            }
        };
        setTimeout(fetchBotAnswers(), 1000)

    }
}
