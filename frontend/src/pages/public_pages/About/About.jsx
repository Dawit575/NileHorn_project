import React from 'react'
import Hero from '../../../components/Commen/Hero/Hero';
import About_info from '../../../components/About/About_Informations/About_Info';
import Education from '../../../components/About/Educations/Education';
import Experiance from '../../../components/About/Experiance/Experiance';
import Mission_vision from '../../../components/About/Mission_Vision/Mission';
import Skills from '../../../components/About/Skills/Skills.jsx';
function About() {
  return (
    <div>
      <Hero/>
      <About_info/>
      <Education/>
      <Experiance/>
      <Mission_vision/>
      <Skills/>
    </div>
  )
}

export default About
