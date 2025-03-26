import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { deleteBlog, getSingleBlog } from '../api/blogApi';
import Header from '../components/Header';
// import news from '../assets/data/news.json'

function SingleNewsPage() {

    const params = useParams()
    const articleId = params.id
    const [warning, setWarning] = useState(false)

    const [newsArticle, setNewsArticle] = useState([])
    const [deletedNews, setDeletedNews] = useState({})
    const [allArticle, setAllArticle] = useState([])
    const [toBeEditedId, setToBeEditedId] = useState()
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [originalNewsArray, setOriginalNewsArray] = useState([])


    
    const getNewItem = async () => {
        try {
            const response = await getSingleBlog(articleId);
            setNewsArticle(response.data)
            // console.log(response.data);
            
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const deleteSingleBlog = async () => {
        await deleteBlog(articleId).then(res=>{
            alert('Blog deleted successfully')
            navigate('/')
        })
    }

    useEffect(() => {

        getNewItem();
    }, []);

    // useEffect(() => {
    //     const fetchAllNews = async () => {
    //         try {
    //             const response = await getAllNewsData()
    //             setAllArticle(response)
    //         } catch (error) {
    //             console.error('Error fetching all news articles:', error);
    //         }
    //     }
    //     fetchAllNews()
    // }, [])

    // useEffect(() => {
        // setToBeEditedId(allArticle.findIndex((item) => item.id === newsArticle.id))
    // }, [allArticle, newsArticle])

    // useEffect(()=>{
    //     const userDetails = JSON.parse(localStorage.getItem('userCredentials'))
    //     if (userDetails) {
    //         setIsLoggedIn(true)
    //     } else{
    //         setIsLoggedIn(false)
    //     }
    // }, [])





    // const deleteNewsHandler = () => {
    //     const fetchToBeDeleted = async () => {
    //         try {
    //             const getData = await deleteArticle(articleId)
    //             setDeletedNews(getData);
    //             alert('news article successfully deleted');
    //         } catch (error) {
    //             console.error('error deleting news', error)
    //         }
    //     };
    //     fetchToBeDeleted();
    //     setWarning(false);
    //     Navigate('/');

    // }






    // useEffect(() => {
    //     setNewsArticle(news[articleId])
    // }, []
    // )

    // HOW useParams() WORKS

    // In the case of this particular project, a number is passed from the 
    // "element.id.toString()" of the homepage into the dynamic path ":id" of 
    // the main route on the App component

    //this number is passed to the dynamic route 

    //now this number is passed to the useParams in the "SingleNewsPage" and 
    // then been used as the index of the jason file that contain an array of objects.

    //Please note that the data/parameter/(in case of this project, it is a number) that
    //useParams() provide is an object where the keys are the dynamic segments defined 
    // in the route and the values are the actual values from the current URL. 
    //in the case of this project, const params = useParams(), params will be equal to 
    // {id: number paseed from the main route}

    //Another thing that you should know is that these numbers are been passed to the address 
    // bar and useParams() usually get its data there. so in the page where the useParams() 
    // is been used (SingleNewsPage component in the case of this project), the number/data 
    // is delivered to the address bar, and then passed to useParams, and then finally passed 
    // to the DOM

    //in another word, we can say that useParam gets its value from the dynamic
    //  route in the main route. in the case of this project, useParams is in the 
    // singleNewsPage component, dynamic route is in the App while the number is 
    // beeen passed from the homePage component

    // If you have more than one dynamic route parameter nested within a route, 
    // the useParams() hook will still work seamlessly. It retrieves all the dynamic parameters 
    // as key-value pairs from the URL. Here's how you can handle such cases:

    // Example Scenario
    // Imagine you have a nested route like:
    // <Route path="/news/:category/:id" element={<SingleNewsPage />} />

    // In this case:
    // :category is a dynamic segment representing a category (e.g., "sports" or "politics").
    // :id is a dynamic segment representing the ID of the specific news article.








    return (
        <div className="">
            <Header />
            <div className=' w-full min-h-[100vh] bg-gray-500 px-[50px] text-white '>
                <div className={warning ? "absolute h-[90vh] w-full flex  justify-center bg-[#6b728081]" :
                    "hidden"
                }>
                    <div className='max-w-[400px] h-fit py-[50px] px-[50px] rounded-xl bg-gray-700 my-auto'>
                        <p className='text-center'>Are you sure you want to Delete this article?</p>
                        <div className='flex justify-center gap-5 bg-gray-700'>
                            <button className=' bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4 '
                                onClick={() => deleteSingleBlog()}>
                                Yes, Delete
                            </button>
                            <button className=' bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4 '
                                onClick={() => setWarning(false)}>
                                No, Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div className="news-details">
                    <div className='flex flex-col mb-5 '>
                        <h3 className='text-3xl font-bold py-5 '>{newsArticle.title}</h3>
                        <div className='flex gap-5'>
                                <button className={isLoggedIn ? 'px-5 h-fit py-3 my-auto bg-gray-700 rounded-xl hover:bg-gray-600':
                                                                'px-5 h-fit py-3 my-auto bg-gray-700 rounded-xl hover:bg-gray-600'
                                }>
                                    <NavLink to={`/news_detail/edit/${newsArticle._id}`}>
                                        Edit
                                    </NavLink>
                                </button>
                            <button className={'px-5 h-fit py-3 my-auto bg-gray-700 rounded-xl hover:bg-gray-600 hdden'
                            }
                                onClick={() => setWarning(true)}>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="news-details flex flex-col gap-5 bg-gray-700 rounded-xl 
                                    pb-[50px] overflow-hidden">

                        <div className=' w-full lg:h-[500px] overflow-hidden '>
                            <img className=' w-full ' src={newsArticle.Image} alt="" />
                        </div>
                        <div className='px-5 flex flex-col gap-7'>
                            <p>{newsArticle.content}</p>
                            <h3 className='text-3xl'>{newsArticle.author}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleNewsPage