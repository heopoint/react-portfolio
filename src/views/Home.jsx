import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Contact from '../components/Contact'
import Port from '../components/Port'
import Footer from '../components/Footer'
import Main from '../components/Main'



function Home() {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default Home