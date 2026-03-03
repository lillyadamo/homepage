import { Routes, Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App