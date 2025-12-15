import './App.css'


function App() {

  return (
    <div className="container">

      <div className="section section-orange">
        <video className='video-background'
        autoPlay
        loop
        muted
        playsInline
        >

        <source  src={`${import.meta.env.BASE_URL}assets/main.mp4`}
         type="video/mp4"
        />

        </video>


        <header className='header'>
        Empalace

        </header>
        
        <div className="content">
          {/* Seção Laranja */}
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
