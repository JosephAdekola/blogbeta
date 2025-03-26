import React from 'react'
import { useRecoilValue } from 'recoil'
import { attachToken } from './utils/atoms/tokenAtom'
import axios from 'axios'

export default function Interceptor() {


    const myToken = useRecoilValue(attachToken)

    axios.interceptors.response.use(
        (response) => response, 
        (error) => {
            if (error) {

            }
        }
    )

    myToken
    
  return (
    <></>
  )
}

