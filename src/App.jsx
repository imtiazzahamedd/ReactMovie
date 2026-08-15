import './CSS/App.css'
import Moviecard from './components/moviecard'
import Home from './Pages/home'
import Favourites from './Pages/favourites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </>
  )
}
export default App
