import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignIn from '../pages/SignIn'
import SingleNewsPage from '../pages/SingleNewsPage'
import EditArticleForm from '../pages/EditArticleForm'
import NewArticleForm from '../pages/NewArticleForm'
import SignUp from '../pages/SignUp'
import About from '../pages/About'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about-us' element={<About />} />
                <Route path='/addarticle' element={<NewArticleForm/>} />
                <Route path='/news_detail/:id' element={<SingleNewsPage/>} />
                <Route path='/news_detail/edit/:id' element={<EditArticleForm/>} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
