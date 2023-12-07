import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState('')
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MERN Render</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
        <button onClick={async ()=>{
          const res = await fetch(`${URL.ping}`)
          const data = await res.json()
          console.log(data)
          setResult(data)
        }}>
          USERS
        </button>
        <pre>
          {JSON.stringify(result, null, 2)}
        </pre>

           <code></code> 
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
