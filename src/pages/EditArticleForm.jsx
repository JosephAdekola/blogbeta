
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { editBlog, getSingleBlog } from '../api/blogApi'

export default function EditArticleForm() {

    const param = useParams()
    const blogId = param.id 
    // const navlId = interId + 1 

    const [image, setImage] = useState('')
    const [title, setTile] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')  
    
    const [originalNews, setOriginalNews] = useState([])  
    
    const navigate = useNavigate()
    
    
    
    const fetchNews = async () => {
        try {
            const response = await getSingleBlog(blogId)
            // setOriginalNews(article)
            setImage(response.data.Image);
            setTile(response.data.title);
            setDescription(response.data.content);
            setAuthor(response.data.author);
            // setNavId(article.id)
            // console.log(response.data);
            
        } catch (error) {
            console.error('error fetching news')
        }
    };



    const submitForm = async (e) => {

        e.preventDefault()

        const payload = {            
            Image: image,
            title: title,
            content: description,
            author: author,
        }        

        try {
            const response = await editBlog(blogId, payload)

            if (response) {
                console.log(response);
                navigate('/')
            } 

        } catch (error) {
            console.error('Error editing the article:', error);
            alert('Their Was An Error While editing Your Article')
        }
    }

    
    useEffect(() => {
        fetchNews();

    }, [])        
    

    return (
        <div className='w-full min-h-[85vh] bg-gray-500 '>
            <Header />
            <div className='mt-10 mx-[100px] '>
                <h3 className=' text-center text-3xl font-bold  '>
                    Edit Post
                </h3>

                <form action="" className='text-black'>

                    <input 
                        type="text" 
                        placeholder='image'
                        className='bg-white px-5 rounded block w-full h-14 
                        my-5 text-black'
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder='Author'
                        className='bg-white px-5 rounded block w-full h-14 
                        my-5' 
                        onChange={(e) => setAuthor(e.target.value)} value={author} 
                    />
                    <input 
                        type="text" 
                        placeholder='Title'
                        className='bg-white px-5 rounded block w-full h-14 my-5' 
                        value={title} 
                        onChange={(e) => setTile(e.target.value)} 
                    />
                    <textarea 
                        name="" 
                        id="" 
                        placeholder='News Details'
                        className='bg-white p-5 rounded w-full h-36 '
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description}
                    >
                    </textarea>

                    <button 
                        className='w-full bg-gray-700 mt-5 h-10 rounded text-white font-bold hover:bg-gray-600'
                        onClick={(e) => submitForm(e)}
                    >
                        Submit
                    </button>

                </form>
            </div>

        </div>
    )
}