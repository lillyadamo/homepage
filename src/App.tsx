import { Routes, Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './pages/home'
import Art from './pages/art'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App