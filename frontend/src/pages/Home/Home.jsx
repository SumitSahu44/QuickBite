import React from 'react'
import './Home.css'


import Header from '../../components/Header/Header'
import MiddleContact from '../../components/MiddleContact/MiddleContact'
import Menu from '../../components/Menu/Menu'
const Home = () => {
  return (
    <div>
      <Header/>
      <MiddleContact/>
      <Menu/>
    </div>
  )
}

export default Home
