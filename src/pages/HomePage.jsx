

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { deleteBlog, getAllBlog } from '../api/blogApi'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../utils/atoms/tokenAtom'
import BlogItem from '../components/BlogItem'

function HomePage() {
    const token = useRecoilValue(tokenState)

    const [originalNewsArray, setOriginalNewsArray] = useState([])
    const [id, setId] = useState('')
    const [warning, setWarning] = useState(false)
    const [deletedNews, setDeletedNews] = useState({})
    
    const fetchNewsArray = async () => {
        await getAllNewsData().then((res)=>{
            setOriginalNewsArray(res)
            
        }).catch((err)=>{
            console.log(err);
        })
    };

    
    // const warningDisplay = (e) => {

    //     setWarning(true); 
    //     setId(e)
    //     console.log(e);
        
    // }
    

    const deleteNewsHandler = () => {
        
        const fetchToBeDeleted = async () => {
            try {
                const getData = await deleteBlog(id)
                setDeletedNews(getData);
                alert('news article successfully deleted');
            } catch (error) {
                console.error('error deleting news', error)
            }
        };
        fetchToBeDeleted();
        setWarning(false);
        window.location.reload();

    }

    const getBlogs = async () => {
        await getAllBlog().then((res)=>{
            setOriginalNewsArray(res.data)
        })
    }



    
    useEffect(()=>{
        getBlogs()

    }, [])

    


    return (

        <div className="">
                <Header />
            <div className='  w-full min-h-[85vh] bg-gray-500 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-[50px] gap-5 '>
                <div className={warning ? "absolute h-[90vh] w-full flex  justify-center bg-[#6b728081]" :
                    "hidden"
                }>
                    <div className='max-w-[400px] h-fit py-[50px] px-[50px] rounded-xl bg-gray-700 my-auto'>
                        <p className='text-center'>Are you sure you want to Delete this article?</p>
                        <div className='flex justify-center gap-5 bg-gray-700'>
                            <button className=' bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4 '
                                    onClick={()=>deleteNewsHandler()}>
                                Yes, Delete
                            </button>
                            <button className=' bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4 '
                                    onClick={()=>setWarning(false)}>
                                No, Cancel
                            </button>
                        </div>
                    </div>
                </div>
                {
                    originalNewsArray.map((element, index) => {
                        return (
                            <BlogItem 
                                key={element._id}
                                // blogInformation={element}
                                id={element._id}
                                image={element.Image}
                                title={element.title}
                                content={element.content}
                                author={element.author}
                                token={token}
                                warningDisplay={setWarning}
                                targetID={setId}
                                identity={element._id}
                            />
                        )
                    })
                }
            </div>
        </div>

    ) 
}

export default HomePage
