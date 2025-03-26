import axios from "axios";

const baseUrl = 'https://fivic73350.pythonanywhere.com/'

const loginUser = async (payload) => {
    return await axios.post(`${baseUrl}users/login/`, payload)
}

export {
    loginUser,
}