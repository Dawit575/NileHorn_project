import React from 'react'
import Hero from '../../../components/Commen/Hero/Hero';
import About_preview from '../../../components/Home/About_Preview/About_preview';
import Skill_preview from '../../../components/Home/Skills_preview/Skill_preview';
import Featured_portfolio from '../../../components/Home/Featured_Portfolio/Featured_Portfolio';
import CallTo_Action from '../../../components/Home/CallTo_Action/CallTo_Action';
import Services_Preview from '../../../components/Home/Services_Preview/Services_Preview';
function Home() {
  return (
    <div>
      <Hero/>
      <About_preview/>
      <Skill_preview/>
      <Featured_portfolio/>
      <CallTo_Action/>
      <Services_Preview/>
    </div>
  )
}

export default Home
