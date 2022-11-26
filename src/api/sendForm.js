import {api} from "./axios";

export const sendForm = async (values) => {
    return await api.post('/notification/', {
        ...values
    }).then(res => console.log(res))
}
