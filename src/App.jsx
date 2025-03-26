import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './router/Router'
import { RecoilRoot } from 'recoil'
import Interceptor from './Interceptor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
      
        <Interceptor />
        <Router />
      </RecoilRoot>
    </>
  )
}

export default App