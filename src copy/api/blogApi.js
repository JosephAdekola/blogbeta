import axios from "axios";

const baseUrl = 'https://fivic73350.pythonanywhere.com/'

const createNewBlog = async (payload) => {
    const token = localStorage.getItem('token')

    return await axios.post(`${baseUrl}blogs/`, payload, header={"AuthenticatorResponsed": `Bearer ${JSON.parse(token)}`})
}

const getAllBlog = async () => {
    return await axios.get(`${baseUrl}blogs/`)
}

const getSingleBlog = async (id) => {
    return await axios.get(`${baseUrl}blogs/${id}/`)
}

const editBlog = async (id, payload) => {
    return await axios.put(`${baseUrl}blogs/${id}/`, payload)
}

const deleteBlog = async (id) => {
    return await axios.delete(`${baseUrl}blogs/${id}/`)
}


export {
    createNewBlog,
    getAllBlog,
    getSingleBlog,
    editBlog,
    deleteBlog,
}