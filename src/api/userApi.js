import axios from "axios";

const baseUrl = 'http://localhost:3500/api/'
    // const baseUrl = 'https://blogbackend-1-shd1.onrender.com/api/'

// const createUser = async (payload) => {
//         return await axios.post(`${baseUrl}createuser/`, payload)
// }

const createUser = async (payload) => {
    try {
        const response = await axios.post(`${baseUrl}createuser/`, payload);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error.response?.data || error.message);
        throw error; // rethrow so the calling function can handle it too
    }
};


const loginUser = async (payload) => {
    return await axios.post(`${baseUrl}users/login/`, payload)
}

// const getOtpToBack = async (payload) => {
//     try {        
//     return await axios.post(`${baseUrl}verifyotp/`, payload)
//     } catch (error) {
//         console.error(error);
        
        
//     }
// }


const getOtpToBack = async (payload)=>{
    return await axios.post(`${baseUrl}verifyotp` , payload)
}


export {
    createUser,
    getOtpToBack,
    loginUser
}