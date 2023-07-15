import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Stats from './components/Stats'
import About from './components/About'
import Challenge from './components/Challenge'
import Solution from './components/Solution'
import Network from './components/Network'
import Owner from './components/Owner'
import Numbers from './components/Numbers'
import Footer from './components/footer'
function App() {
    return(
    <>
    <div className='font-black'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-opacity-100'>
    <Navbar /> 
    <Hero />
    </div>
    <div>
    <Clients />
    </div>
    <div>
    <Stats/>
    </div>
    <div>
    <About/>
    </div>
    <div>
    <Challenge /></div>
    <div>
    <Solution /></div>
    <div>
    <Network /></div>
    <div>
    <Owner /></div>
    <div>
        <Numbers/></div>
        <div>
        <Footer/></div>
        </div>
        </>
    ) 
}

export default App
