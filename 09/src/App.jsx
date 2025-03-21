import { useState } from 'react'
import './App.css'
import { DataFetcher } from './components/DataFetcher'

function App() {
  const [show, setShow] = useState(true)

  return (
      <div>
          <button onClick={() => setShow(!show)}>
              {show ? 'Unmount' : 'Mount'} DataFetcher
          </button>
          {show && <DataFetcher />}
      </div>
  )
}

export default App
