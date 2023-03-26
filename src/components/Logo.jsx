import {React, useState} from 'react'
import logoImg from '../assets/logoImg.jpg'
import '../styles/logo.css'

const Logo = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  function show() {
    setShowOverlay(true);
  }

  function hide() {
    setShowOverlay(false);
  }
  return (
    <>
    <div onClick={show} className='logo-container'>
      <img src={logoImg} alt="Logo image" />
    </div>
    {showOverlay && (
      <div className="overlay" onClick={hide}>
        <div className='overlay_img'>
          <img src={logoImg} alt="Logo image" />
          <div className='overlay_img_text'>
            <div>
            <h5>Technologies:</h5><p>HTML, CSS, JavaScript, React JS, Redux, Bootstrap, Git / GitHub, MySQL</p>
            </div>

            <div className='overlay_img_text--grey'>
            <h5>Soft Skills:</h5><p>Problem solving, diagnostics and repair of computers, adaptability, teamwork, autodidact</p>
            </div>

            <div>
            <h5>Languages:</h5><p>Native Spanish, fluent English</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Logo