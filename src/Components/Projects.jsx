import React from 'react'
import ProjectItem from './ProjectItem'
import CryptoBucks_App from "../assets/CryptoBucks_App.png";
import TenziesGame from "../assets/TenziesGame.png";
import E_Commerce from "../assets/E-Commerce1.png";
import Netflix_Clone from "../assets/Netflix_Clone.png";
import BlackJack from "../assets/BlackJack.png";
import Portfolio from "../assets/MyPortfolio_Site.png";

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8 text-stone-600'>
          These are some of my projects which was built using mostly ReactJs and Tailwindcss, while the rest was built using the basic HTML5, CSS3 and JavaScript. It was truly fun to build and quite challenging.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={CryptoBucks_App} title='Crypto App' tools='ReactJS & Tailwindcss' />
          <ProjectItem img={Netflix_Clone} title='Netflix_Clone' tools='ReactJS & Tailwindcss' />
          <ProjectItem img={TenziesGame} title='Tenzies App' tools='ReactJS & Tailwindcss'/>
          <ProjectItem img={E_Commerce} title='E-Commerce App' tools='HTML5, CSS3 & JavaScript'/>
          <ProjectItem img={BlackJack} title='E-Commerce App' tools='ReactJs & Tailwindcss'/>
          <ProjectItem img={Portfolio} title='E-Commerce App' tools='ReactJs & Tailwindcss'/>
        </div>
    </div>
  )
}

export default Projects