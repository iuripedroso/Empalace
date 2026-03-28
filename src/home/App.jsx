import './App.css'
import { useEffect } from 'react'



function App() {

  return (
    <div className="container">

      <div className="section section-orange">

        <div className="video-section">
          {/* <video className='video-background'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={`${import.meta.env.BASE_URL}assets/main.mp4`}
              type="video/mp4"
            />
          </video> */}

          <header className='header'>
            <div className="h-logo">Empalace</div>
          </header>


          <div className="main-group">
            <div className="main"><h1>THE LANGUAGE OF<br />CLOTHING</h1></div>
            <div className="submain">Our 2025 collection is designed to redefine contemporary style, creating pieces that resonate with a refined, ever-changing world.</div>
          </div>
        </div>

        <div className="login">
          <div className="login-main">
            <button>LOGIN/SIGN</button>
          </div>

        </div>
      </div>

      {/* <div className="section section-black">
        <div className="content">
        </div>
      </div> */}
    </div>
  );
}

export default App