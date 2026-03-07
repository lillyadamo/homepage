import { Routes, Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './pages/home'
import Art from './pages/art'
import Photography from './pages/photography'
import Contact from './pages/contact'
import Projects from './pages/projects'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art/>} />
        <Route path="/photography" element={<Photography/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App