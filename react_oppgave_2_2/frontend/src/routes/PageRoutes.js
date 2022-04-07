import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import ErrorPage from '../pages/ErrorPage'
import Services from '../pages/Services'
import Service from '../pages/Service'
import Layout from '../layout/Layout'
import Create from '../pages/Create'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function PageRoutes() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Services />} />
          <Route path="/" element={<Services />} />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path=":slug" element={<Service />} />
          </Route>
          <Route path="new" element={<Create />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}
