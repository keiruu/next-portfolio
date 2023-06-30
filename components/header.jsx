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

  const bounceAnimation = {
    opacity: 1,
    y: [10, -5, 0], 
  };

  const buttonVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
  };

  const bounceTransition = {
    duration: 0.8,
    ease: 'easeOut',
    y: {
      duration: 0.8,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  };

  return (
    <div className='space-y-5 w-[85%] lg:w-[70%] pt-32 pb-48'>
      <div className='relative lg:space-y-3 w-fit'>
        <motion.h1 className='font-semibold text-2xl md:text-3xl lg:text-6xl text-accent-1'>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={bounceAnimation}
            transition={bounceTransition}
            className='inline-block'
          >Hi,</motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={bounceAnimation}
            transition={{ ...bounceTransition, delay: 0.5 }}
            className='inline-block'
          >I&apos;m Abigail,
          </motion.span>
        </motion.h1>

        {/* WEB VIEW  */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={bounceAnimation}
          transition={{ ...bounceTransition, delay: 1 }}
          className='hidden lg:block relative font-semibold text-2xl md:text-3xl lg:text-6xl'>A Web Developer based <br/>
          in the Philippines.
          <motion.div className='absolute -top-1 right-0 lg:left-[46rem] transform rotate-6'
            initial={{rotate: 6, y: 0}}
            animate={{y: [-4, 4, -4]}}
            transition={{
              duration: 3.1, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1]}}
              transition={{ 
                duration: 0.7,
                ease: 'easeOut',
                delay: 1.6,
              }}
              className='inline-block'
            ><Stars fill="#FFC857"/></motion.span>
          </motion.div>
          <motion.div className='absolute -top-8 right-0 lg:left-[44rem] transform -rotate-12 scale-[2]'
            initial={{rotate: -12, scale: 1.5, y: 0}}
            animate={{y: [-4, 4, -4]}}
            transition={{
              duration: 3.3, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1]}}
              transition={{ 
                duration: 0.7,
                ease: 'easeOut',
                delay: 1.8,
              }}
              className='inline-block'><Stars fill="#6184D8"/></motion.span>
          </motion.div>
        </motion.h1>

        {/* MOBILE VIEW  */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={bounceAnimation}
          transition={{ ...bounceTransition, delay: 1 }}
          className='block lg:hidden relative font-semibold text-2xl md:text-3xl lg:text-6xl'>A Web Developer based
          in the Philippines.
          <motion.div className='absolute -top-3 -right-6 transform rotate-6'
            initial={{rotate: 6, y: 0}}
            animate={{y: [-4, 4, -4]}}
            transition={{
              duration: 3.1, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1]}}
              transition={{ 
                duration: 0.7,
                ease: 'easeOut',
                delay: 1.6,
              }}
              className='inline-block'
            ><Stars fill="#FFC857"/></motion.span>
          </motion.div>
          <motion.div className='absolute -top-6 -right-1 transform -rotate-12 scale-[2]'
            initial={{rotate: -12, scale: 1.5, y: 0}}
            animate={{y: [-4, 4, -4]}}
            transition={{
              duration: 3.3, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1]}}
              transition={{ 
                duration: 0.7,
                ease: 'easeOut',
                delay: 1.8,
              }}
              className='inline-block'><Stars fill="#6184D8"/></motion.span>
          </motion.div>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{delay: 1.7}}
        className='text-sm lg:text-base text-font-color-2'>I like building web apps using <b>React</b> & mobile apps using <b>Flutter</b></motion.p>
      </div>


      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 1.9, staggerChildren: 0.3}}
        className='flex gap-3 lg:gap-5 items-center'
      >
        <motion.button variants={buttonVariants} onClick={scrollToSection} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} 
          className='border-accent-2 border hover:border-white transition-all px-5 lg:px-8 py-3 bg-accent-2 rounded-full text-xs lg:text-base'>Get in Touch</motion.button>
        <motion.a variants={buttonVariants} href='https://www.linkedin.com/in/abbyunat/' target='_blank' rel='noreferrer'>
          <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-3 lg:p-5 border-font-color-2 hover:border-white transition-all'>
            <BsLinkedin size={18}/>
          </button>
        </motion.a>
        <motion.a variants={buttonVariants} href='https://github.com/keiruu' target='_blank' rel='noreferrer'>
          <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-3 lg:p-5 border-font-color-2 hover:border-white transition-all'>
            <BsGithub size={18}/>
          </button>
        </motion.a>
      </motion.div>
    </div>
  )
}
