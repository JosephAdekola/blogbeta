import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { loginUser } from '../api/userApi'
import { tokenState } from '../utils/atoms/tokenAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { createNewBlog } from '../api/blogApi'
import { userState } from '../utils/atoms/userAtom'

export default function SignIn() {
    const [token, setToken] = useRecoilState(tokenState)
    const [user, setUser] = useRecoilState(userState)
    
    const navigate = useNavigate()
    
    const [allUser, setAllUser] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userDetails, setUserDetails] = useState({})
    const [voidField, setVoidField] = useState('')
    


    const signInHandler = async (e) => {

        
        e.preventDefault();

        const payload = {
            username: username,
            password: password
            // img: 'http',
            // author: 'YesiratOladoja',
            // content: 'any content',
            // title: 'any title'
        }

        // await createNewBlog(payload).then((res)=>{
        //     // if (res)
        // })

        await loginUser(payload).then((res)=>{
            console.log(res.data);
            
            if (res) {
                console.log(res.data);
                const token = {
                    access: res?.data?.access,
                    refresh: res?.data?.refresh,
                }
                console.log(token);
                
                setToken(token)
                alert('Login successful')
                setUser(res.data.user)
                navigate('/')

            }
            
        }).catch((err)=>{
            console.log(err.response);
            alert('Invalid Credential')
            
        })
        console.log(payload);
        
        
    }

    

    // console.log(allUser);
    // console.log(username);
    // console.log(password);
    
    
    

    return (
        <div className="">
            <Header />
            <div className='bg-gray-600 text-white w-full min-h-[85vh] px-[50px] '>

                <div className=' max-w-[400px] py-20 mx-auto '>
                    <form className='w-full flex flex-col gap-3 ' action="">
                        <div className=' w-full mx-auto '>
                            <h3 className=' text-4xl '>Sign In</h3>

                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Username:</label>
                            <input className=' block w-full h-14 bg-white rounded text-black px-5 ' 
                                    type="username" 
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Password:</label>
                            <input className=' block w-full h-14  bg-white rounded text-black px-5 ' 
                            type="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>
                        <div className=' w-full mx-auto '>
                            <button className='w-full bg-gray-700 h-10 rounded-xl hover:bg-gray-600'
                                    onClick={(e)=>signInHandler(e)}>
                                Sign In
                            </button>
                            <p className='text-center text-red-700 bg-white mt-2 rounded px-1'>
                                {voidField}
                            </p>
                            <button className='w-full bg-gray-700 h-10 rounded-xl hover:bg-gray-600 mt-3'
                                    onClick={()=>{Navigate('/sign-up')}}>
                                don't have an account? sign-up now!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
