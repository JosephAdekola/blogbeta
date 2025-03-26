import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignIn from '../pages/SignIn'
import SingleNewsPage from '../pages/SingleNewsPage'
import EditArticleForm from '../pages/EditArticleForm'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/news_detail/:id' element={<SingleNewsPage/>} />
                <Route path='/news_detail/:id/edit' element={<EditArticleForm/>} />
                <Route path='/sign-in' element={<SignIn/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
