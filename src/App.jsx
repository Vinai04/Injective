import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LaunchApp from './components/LaunchApp'


function App() {

  return (
    <>
      <div className='min-h-screen p-4 bg-background-pattern bg-no-repeat bg-cover bg-center'>
        <Navbar />
        <LaunchApp />
      </div>
    </>
  )
}

export default App
