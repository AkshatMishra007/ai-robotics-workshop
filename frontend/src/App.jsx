import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventDetailPage from './pages/EventDetailPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
