import React from 'react'
import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"
import BgImg from "../assets/property.jpg"

const Main = () => {
  return (
    <div id="main">
        <img 
            className="w-full h-screen object-cover object-left scale-x-[-1]" 
            src={BgImg} 
            alt="/" 
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Eric Justin Ifemeje</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
                <TypeAnimation
                    sequence={[
                        'Developer',
                        2000,
                        'Coder',
                        2000,
                        'Tech Enthusiast',
                        2000,
                        'YouTuber',
                        4000
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', fontWeight: 700, display: 'inline-block', paddingLeft: '5px' }}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20} />
                    <FaFacebookF className='cursor-pointer' size={20} />
                    <FaInstagram className='cursor-pointer' size={20} />
                    <a href="https://www.linkedin.com/in/eric-justin-ifemeje-838313251">
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </a>
                    <a href="https://github.com/EricJustinChukwuma">
                        <FaGithub className='cursor-pointer' size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main