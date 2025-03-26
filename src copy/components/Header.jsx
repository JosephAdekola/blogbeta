

import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { tokenState } from '../utils/atoms/tokenAtom';
import { userState } from '../utils/atoms/userAtom';


function Header() {

    const user = useRecoilValue(userState)
    const resetUser = useResetRecoilState(userState)
    const resetToken = useResetRecoilState(tokenState)
    const [r_token, setR_token] = useRecoilState(tokenState)

    const [showMenu, setShowMenu] = useState(false)
    // const [isLoggedIn0. setIsLoggedIn] = useState(false)
    // const [useerDetails, setUserDetails] = useState({})
    const Navigate = useNavigate()


    const logOutHanler = () => {
        // localStorage.removeItem('userCredentials');
        // setIsLoggedIn(false); 
        resetToken()
        resetUser()
        Navigate('/'); 
        alert('logOut successful')
        window.location.reload()
    };

    // const resetToken = () => {
    //     setR_token(null)
    // }
    

    
    useEffect(() => {
        if (user.role){
            console.log(user.role, 'the user.role');
        }
        
        // const loginVerify = JSON.parse(localStorage.getItem('userCredentials'));
        // if (loginVerify) {
        //     setUserDetails(loginVerify);
        //     setIsLoggedIn(true);
        // } else {
        //     setIsLoggedIn(false);
        // }
    }, []);
    

    return (
        <div className='border w-full h-[10vh] bg-gray-500 text-white flex 
                        justify-between items-center  px-[50px] font-bold '>

            <div className=''>
                <h1 className=' text-5xl '><Link to='/' >Blog</Link></h1>
            </div>

            <div className='  '>
                <ul className=' hidden lg:flex gap-5  w-fit ml-auto text-xl '>
                    <li className=' inline-block '><NavLink
                        className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                            'bg-gray 500'} to='/'>Home</NavLink></li>

                    <li className=' inline-block '><NavLink
                        className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                            'bg-gray 500'} to='about-us'>About</NavLink></li>

                    <li className={ user.role ? 'inline-block ' : 'hidden'}>
                        <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                                    'bg-gray 500'} to='newarticle'>
                                Add-Article
                        </NavLink></li>

                    <li className={ user.role ? 'hidden' : 'inline-block'}>
                        <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                            'bg-gray 500'} to='/sign-in'>
                                Sign In
                        </NavLink>
                    </li>
                    <li className={ user.role ? 'hidden' : 'inline-block'}>
                        <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                            'bg-gray 500'} to='/sign-Up'>
                                Sign Up
                        </NavLink>
                    </li>
                    <li className={ user.role ? 'inline-block ' : 'hidden'}
                        onClick={()=>logOutHanler()}>
                        <NavLink className='hover:bg-gray-700 p-3 rounded' >
                                Sign Out
                        </NavLink>
                    </li>
                </ul>

                {/* RESPONSIVENESS */}

                {
                    showMenu ?



                        <div>
                            <div className='lg:hidden'>
                                <i onClick={() => setShowMenu(false)} className='pi pi-times 
                            cursor-pointer text-2xl '></i>
                            </div>
                            <ul className=' text-xl lg:hidden absolute text-center top-[10vh] 
                                    w-[100%] shadow-2xl left-0 bg-gray-500 flex flex-col gap-5 py-5 '>
                                <li onClick={() => setShowMenu(false)}><NavLink
                                    className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                                        'bg-gray 500'} to='/'>Home</NavLink></li>

                                <li onClick={() => setShowMenu(false)}><NavLink
                                    className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                                        'bg-gray 500'} to='about-us'>About</NavLink></li>

                                <li onClick={() => setShowMenu(false)}
                                    className={user.role? 'bg-gray-500 rounded p-3 w-fit mx-auto hover:bg-gray-700' : 'hidden'}>
                                    <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded p-3' :
                                                'bg-gray 500'} to='newarticle'>
                                            Add-Article
                                    </NavLink></li>

                                <li onClick={() => setShowMenu(false)}
                                    className={user.role? 'hidden' : 'bg-gray-500 rounded p-3 w-fit mx-auto hover:bg-gray-700'}>
                                    <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded ' :
                                                'bg-gray 500'} to='sign-in'>
                                            Sign In
                                    </NavLink></li>
                                
                                <li onClick={() => setShowMenu(false)}
                                    className={ user.role ? 'hidden' : 'bg-gray 500 rounded p-3 w-fit mx-auto hover:bg-gray-700'}>
                                    <NavLink className={({ isActive }) => isActive ? 'bg-gray-700 rounded' :
                                                'bg-gray 500'} to='sign-in'>
                                            Sign Up
                                    </NavLink></li>

                                <li onClick={() => {setShowMenu(false); logOutHanler()}}
                                    className={ user.role ? 'bg-gray-500 rounded p-3 w-fit mx-auto hover:bg-gray-700' : 'hidden'}>
                                        <NavLink>
                                            Sign Out
                                        </NavLink>
                                </li>
                            </ul>
                        </div> :
                        <div className='lg:hidden'>
                            <i onClick={() => setShowMenu(true)} className='pi pi-align-justify 
                            cursor-pointer text-2xl '></i>
                        </div>

                }





            </div>

        </div>
    )
}

export default Header