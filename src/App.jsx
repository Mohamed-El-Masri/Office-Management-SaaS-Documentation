import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Architecture from './pages/Architecture'
import MultiTenancy from './pages/MultiTenancy'
import DesignPatterns from './pages/DesignPatterns'
import Security from './pages/Security'
import Frontend from './pages/Frontend'
import CoreTechnologies from './pages/CoreTechnologies'
import React from 'react';
import IconDemo from './components/IconDemo';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <Router>
      <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header 
            toggleSidebar={toggleSidebar} 
            toggleDarkMode={toggleDarkMode} 
            darkMode={darkMode} 
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/multi-tenancy" element={<MultiTenancy />} />
              <Route path="/design-patterns" element={<DesignPatterns />} />
              <Route path="/security" element={<Security />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/core-technologies" element={<CoreTechnologies />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
