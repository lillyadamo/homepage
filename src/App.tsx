import { Routes, Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './pages/home'
import Art from './pages/art'
import Photography from './pages/photography'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art/>} />
        <Route path="/photography" element={<Photography/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App