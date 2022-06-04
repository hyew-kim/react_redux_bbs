import { useState } from 'react'
import logo from './logo.svg'
import MainView from './pages/Main/MainView'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <MainView />
    </div>
  )
}

export default App
