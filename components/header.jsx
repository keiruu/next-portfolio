import React, { useState } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Stars from '@/components/stars'
import { motion } from 'framer-motion'

export default function Header() {
  const [hovered, setHovered] = useState(false)

  const scrollToSection = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='space-y-5 w-[85%] lg:w-[70%] pt-32 pb-48'>
      <div className='relative lg:space-y-3 w-fit'>
        <h1 className='font-semibold text-3xl lg:text-6xl text-accent-1'>Hi, I&apos;m Abigail,</h1>
        <h1 className='font-semibold text-3xl lg:text-6xl'>A Web Developer based <br/>
          in the Philippines.
        </h1>
        <motion.div className='absolute top-12 right-4 lg:top-[30%] lg:right-24 transform rotate-6'
          initial={{rotate: 6}}
          animate={hovered ? {rotate: 12} : {rotate: 24}}
        >
          <span><Stars fill="#FFC857"/></span>
        </motion.div>
        <motion.div className='absolute top-8 right-8 lg:top-[25%] lg:right-32 transform -rotate-12 scale-[2]'
          initial={{rotate: -12, scale: 0}}
          animate={hovered ? {rotate: -30, scale: 1.5} : {rotate: -12, scale: 1.5}}
        >
          <span><Stars fill="#6184D8"/></span>
        </motion.div>
        <p className='text-sm lg:text-base text-font-color-2'>I&apos;m currently a senior taking up a Bachelor&apos;s Degree in Information Technology majoring in Software Technologies.</p>
      </div>
      <div className='flex gap-3 lg:gap-5 items-center'>
        <button onClick={scrollToSection} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='font-bowlby border-accent-2 border hover:border-white transition-all px-8 py-4 bg-accent-2 rounded-full text-sm lg:text-xl'>Get in Touch</button>
        <a href='https://www.linkedin.com/in/abbyunat/' target='_blank' rel='noreferrer'>
          <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-4 lg:p-5 border-font-color-2 hover:border-white transition-all'>
            <BsLinkedin size={18}/>
          </button>
        </a>
        <a href='https://github.com/keiruu' target='_blank' rel='noreferrer'>
          <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-4 lg:p-5 border-font-color-2 hover:border-white transition-all'>
            <BsGithub size={18}/>
          </button>
        </a>
      </div>
    </div>
  )
}
