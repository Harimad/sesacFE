import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import FooterComponent from './FooterComponent'
import './HomeComponent.scss'

const HomeComponent = () => {
  const value = useContext(ThemeContext)
  console.log(value.darkMode)

  const theme = {
    background: value.darkMode ? 'black' : 'white',
    color: value.darkMode ? 'white' : 'black',
  }

  return (
    <div className="container" style={theme}>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeComponent
