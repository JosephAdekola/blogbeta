import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { createUser, getOtpToBack } from '../api/userApi'


export default function SignUp() {


    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [requiredAlert, setRequiredAlert] = useState('')
    const [emailVerify, setEmailVerify] = useState('')
    const [useNameVerify, setUserNameVerify] = useState('')
    const [useridentity, setUserIdentity] = useState("")
    const [userOtp, setUserOtp] = useState('')
    // const [otpPanel, setOtpPanel] = useState(true)
    

    const Navigate = useNavigate()

    const nameUpdater = (e) => {
        setName(e.target.value)
        
    }

    const genderUpdater = (e) => {
        setGender(e.target.value)
        console.log(gender);
        
    }

    const emailUpdater = (e) => {
        setEmail(e.target.value)
    }

    const UserNameUpdater = (e) => {
        setUserName(e.target.value)
    }

    const PasswordUpdater = (e) => {
        setPassword(e.target.value)
    }

    const otpUpdater = (e) => {
        setUserOtp(e.target.value)
    }

    const newUserAdder = async (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            email: email,
            username: userName,
            password: password,
            gender: gender
        }
        
        if (name.length < 1 || gender == '' || email.length < 1 || userName.length < 1 || password.length < 1) {
            setRequiredAlert('All Feeds Are Required');
            return;
        } 
        
        try {
            const response = await createUser(newUser);
            
            setUserIdentity(response.data.data.userID);
            console.log(response.data.data.userID);
            
            if (response) {
                setName('')
                setEmail('')
                setUserName('')
                setPassword('')
                setGender('')
                setUserNameVerify('')
                setEmailVerify('')
                alert('sign up Successful! an otp has been sent to your email. you will now be redirected to verify your email by entering y')
                setOtpPanel(true)
                Navigate(`/otpverification/${useridentity}`)
            } else {
                alert('unable to add new user')
            }

            

        }
        catch (error) {
            console.error('unable to fetch user', error)
        }

    }

    // const submitOTP = async () => {
        
    //     const payload = {
    //         userID: useridentity,
    //         otp: userOtp
    //     }

    //     try {
    //         const response = await getOtpToBack(payload);
            
    //         console.log(response);
    //         console.log(payload);
            
                    
    //         // if (!response?.status !== 200) {
    //         //     alert('could not verify otp')
    //         //     return;
    //         // }

    //         alert('email verification successful, you will now be redirected to login');
    //         setOtpPanel(false)
    //         // Navigate('/sign-in')

    //     } catch (error) {
    //         console.log('unable to fetch user', error)
    //     }
    // }
        return (
            <div className='bg-gray-500 w-full min-h-[85vh] px-2 sm:px-[50px] '>
                <div className=' relative '>
                <Header />
                </div>
                {/* <div className={`absolute left-0 w-full h-[100vh] bg-amber-100 ${!otpPanel ? 'hidden' : 'flex'} justify-center`}>
                    <div className=' my-auto '>
                    <h3>verify your email</h3>
                    <p>please enter your otp below</p>
                    <input type="text" placeholder='enter yourotp here'
                            onChange={(e) => otpUpdater(e)} />
                    <button onClick={submitOTP}>
                        SUBMIT
                    </button>
                    </div>
                </div> */}
                <div className=' max-w-[400px] py-20 mx-auto '>
                    <form className='w-full flex flex-col gap-3 text-white ' action="">
                        <div className=' w-full mx-auto '> 
                            <h3 className=' text-4xl  '>Sign Up</h3>

                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Name:</label>
                            <input className=' block w-full h-14 rounded text-black px-5 bg-white '
                                type="text"
                                onChange={(e) => nameUpdater(e)}
                                value={name} />
                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Gender:</label>
                            <select name="" id="" className=' block w-full h-14 rounded text-black px-5 bg-white '
                                onChange={(e) => genderUpdater(e)}
                                value={gender}>
                                <option value="">select yoour gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Email:</label>
                            <input className=' block w-full h-14 rounded text-black px-5 bg-white'
                                type="email"
                                onChange={(e) => emailUpdater(e)}
                                value={email} />
                            <p className='text-center text-red-700 bg-white mt-2 rounded'>{emailVerify}</p>
                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">User Name:</label>
                            <input className=' block w-full h-14 rounded text-black px-5 bg-white '
                                type="text"
                                onChange={(e) => UserNameUpdater(e)}
                                value={userName} />
                            <p className='text-center text-red-700 bg-white mt-2 rounded'>{useNameVerify}</p>
                        </div>
                        <div className=' w-full mx-auto '>
                            <label className=' block ' htmlFor="">Password:</label>
                            <input className=' block w-full h-14 rounded text-black px-5 bg-white '
                                type="password"
                                onChange={(e) => PasswordUpdater(e)}
                                value={password} />
                        </div>

                        <div className=' w-full mx-auto '>
                            <button className='w-full bg-gray-700 h-10 rounded-xl hover:bg-gray-600'
                                onClick={newUserAdder}>
                                Sign Up
                            </button>
                            <button className='w-full bg-gray-700 h-10 rounded-xl hover:bg-gray-600 mt-2'
                                onClick={() => { Navigate('/sign-in') }}>
                                Already have an account? sign-in now!
                            </button>
                            <p className='text-center text-red-700 bg-white rounded mt-3'>
                                {requiredAlert}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
