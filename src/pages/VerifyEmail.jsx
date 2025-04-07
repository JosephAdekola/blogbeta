import React, { useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { getOtpToBack } from '../api/userApi'



export default function VerifyEmail() {
    const {id} = useParams()
    const [typedOtp, setTypedOtp]= useState('')
    const [typedID, setTypedID]= useState('')

    const otpUpdater = (e)=>{
        setTypedOtp(e.target.value)   
    }

    const userIDUpdater = (e)=>{
        setTypedID(e.target.value)
          
    }

    const verifyEmailHandler = async ()=>{
        const payload = {
            userID: typedID,
            otp: typedOtp
        }

        console.log(payload);
        
        
        // try {
        //     const response = await getOtpToBack(payload)
        //     const res = await response.json()
        //     console.log(res);
        //     console.log(payload);
        //     console.log('Full Response:', res);
        //     // console.log('Response Data:', response.data);
            
        // } catch (error) {
        //     console.log(error);
        // }

        await getOtpToBack(payload).then((res)=>{
            console.log(res);

        }).catch(err=>{
            console.log(`Error occured: ${err}`);
            
        })
    }
  return (
    <div>
        <Header />
        <div className={` left-0 w-full h-[100vh] bg-amber-100 flex justify-center`}>
                <div className=' my-auto '>
                    <h3>verify your email</h3>
                    <p>please enter your otp below</p>
                    <input type="text" placeholder='enter yourotp here' onChange={(e)=>otpUpdater(e)} className='border my-5'/> <br />
                    <input type="text" placeholder='enter your userID here' onChange={(e)=>userIDUpdater(e)} className='border my-5'/> <br />
                    <button onClick={verifyEmailHandler}>
                        SUBMIT
                    </button>
                </div>
        </div>
    </div>
  )
}
