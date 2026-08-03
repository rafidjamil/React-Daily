import React from 'react'
import "./index.css"
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-20 flex-1">
        <Profile />
        <Tabs />
      </div>
    </div>
  )
}

export default App