import React from 'react'

import PageNavbar from './components/PageNavbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <>
      <PageNavbar />
      <Home />
      <About path="#about"/>
      <Projects path="#projects"/>
      <Experience path="#experience"/>
      <Interests path="#interests"/>
      <Contacts path="#contacts"/>
    </>
  )
}

export default App
