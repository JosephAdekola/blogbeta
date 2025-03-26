import axios from "axios";

const baseUrl = 'https://blogbackend-1-shd1.onrender.com/api/'

const createNewBlog = async (payload) => {
    const token = localStorage.getItem('token')

    return await axios.post(`${baseUrl}createnews/`, payload)
}

const getAllBlog = async () => {
    return await axios.get(`${baseUrl}allnews/`)
}

const getSingleBlog = async (id) => {
    return await axios.get(`${baseUrl}singlenews/${id}/`)
}

const editBlog = async (id, payload) => {
    return await axios.put(`${baseUrl}edit/${id}/`, payload)
}

const deleteBlog = async (id) => {
    return await axios.delete(`${baseUrl}delete/${id}/`)
}


export {
    createNewBlog,
    getAllBlog,
    getSingleBlog,
    editBlog,
    deleteBlog,
}