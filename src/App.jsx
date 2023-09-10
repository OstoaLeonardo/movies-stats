import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'
import ActorDetails from './pages/ActorDetails'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie'>
          <Route path=':id' element={<MovieDetails />} />
        </Route>
        <Route path='cast'>
          <Route path=':id' element={<ActorDetails />} />
        </Route>
        <Route path='search'>
          <Route path=':query' element={<Search />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
