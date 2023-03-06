import { useState } from 'react'
import './App.css'
import BgMountainsTop from './components/background_components/BgMountainsTop'
import TiltLine from './components/background_components/TiltLine'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import SkillSection from './components/skillSection'
import WelcomeSection from './components/WelcomeSection'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='bg_colored'><WelcomeSection/></div>
      <div className='bg_colored2'>
        <BgMountainsTop/>
        <SkillSection/>
      </div>
      <div className='bg_colored3'>
        <TiltLine/>
        <ProjectsSection/>
      </div>
    </div>
  )
}

export default App