import React from 'react'
import { CharacterInfo } from '../components/CharacterInfo'
import { Navbar } from '../components/Navbar'
import '../css/HomePage.css';

export const HomePage = () => {
  return (
    <>
    <Navbar/>

    <CharacterInfo/>
    </>
  )
}
