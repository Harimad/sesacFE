import React, { useState } from 'react'
import { ThemeContext } from './components/1207Practice/useContextDarkMode/ThemeContext'
import HomeComponent from './components/1207Practice/useContextDarkMode/HomeComponent'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponent />
    </ThemeContext.Provider>
  )
}

export default App
