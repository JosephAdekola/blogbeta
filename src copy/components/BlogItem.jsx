import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogItem({ image, author, title, content, id, token }) {
  return (
    <div>
        
        <div key={id} className=' bg-gray-700  rounded overflow-hidden '>
            <div>
                <img
                    src={image}
                    alt="Bitcoin ATM breach news"
                />
            </div>
            <div className=' p-5 flex flex-col gap-5 '>
                <div ><h3 className=' text-white font-extrabold '> {title} </h3></div>
                <p className=' text-white font-extralight ' > {content}... <Link to={`/news_detail/${id}`} className='text-blue-400'><span className='py-2 px-2'> read more</span></Link> </p>
                <hr />
                <div className='flex justify-between'>
                    <p className=' text-white font-bold '> {author} </p>
                    <div className='flex gap-2'>
                        <div>
                            <button className={token? 'p-3 bg-gray-500 rounded hover:bg-gray-600': 'hidden' }> <Link to={`/news_detail/${id}/edit`}>Edit</Link></button>
                        </div>
                        <button className={token ? 'p-3 bg-gray-500 rounded hover:bg-gray-600' : 'hidden'}
                                // onClick={()=>warningDisplay(element.id)}
                                >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
