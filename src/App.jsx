import { useState } from 'react'
import './App.css'
import BgMountainsTop from './components/background_components/BgMountainsTop'
import NavBar from './components/NavBar'
import WelcomeSection from './components/WelcomeSection'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='bg_colored'><WelcomeSection/></div>
      <div className='bg_colored2'><BgMountainsTop/></div>
    </div>
  )
}

export default App
