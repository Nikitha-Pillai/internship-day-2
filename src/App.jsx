import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { View } from './components/View'
import { Add } from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
     <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add person= {{ 
        Name:'Maya',
      Email:'m@gmail.com',
      Password:'1234',
      Address:'Lucknow'}}/>}></Route>
      <Route path='/movie' element={<Movie/>}></Route>
     </Routes>
    </>
  )
}

export default App
