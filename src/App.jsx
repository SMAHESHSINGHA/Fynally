import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Learning from './pages/Learning.jsx'
import Internships from './pages/Internships.jsx'
import Employment from './pages/Employment.jsx'
import { useEffect } from 'react'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
