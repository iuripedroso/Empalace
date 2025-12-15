import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      <div style={{
        width: '100vw',
        height: '100vh',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#ff6b35'
      }}>
        <div style={{ textAlign: 'center' }}>
          Seção Laranja
        </div>
      </div>

      <div style={{
        width: '100vw',
        height: '100vh',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#000000'
      }}>
        <div style={{ textAlign: 'center' }}>
          Seção Preta
        </div>
      </div>
    </div>
  );
}


export default App
