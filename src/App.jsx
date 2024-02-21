import { useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState('');
  const [FullName,setFullName] = useState('');
  return (
    <>
      <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setFullName(name)}>Greeting</button>
      {
        FullName && <p>Hello, {FullName} !!</p>
      }
    </>
  )
}

export default App
