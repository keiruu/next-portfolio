'use client'

import Nav from '@/components/nav'
import Project from '@/components/project'
import Stars from '@/components/stars'
import Tech from '@/components/tech'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Header from './header'
import About from './about'

export default function Page() {
  const [ref, inView] = useInView();
  const [aboutRef, aboutInView] = useInView();

  const imageVariants = {
    initial: { scale: 0, opacity: 0},
    hover: { scale: 1.2, opacity: 1}
  };

  const transition = {
    delay: 0.2
  };

  return (
    <main className='relative'>
      <div className='absolute -top-28 right-0'>
        <div class="w-72 h-72 rounded-full bg-accent-2 blur-3xl opacity-10"></div>
      </div>
      <Nav/>
      <div className='mx-auto flex flex-col justify-center space-y-14 lg:space-y-20 items-center text-4xl'>
        {/* header */}
        <Header/>

        {/* projects */}
        <motion.div className='relative' initial='rest' whileHover='hover' animate='rest'>
          <h1 className='text-xl lg:text-4xl font-bowlby' ref={ref}>Stuff I&apos;ve <span className='text-accent-2'>worked</span> on</h1>     
          <motion.div className='absolute -right-5 -top-5'
            initial="initial"
            animate={inView ? 'hover' : 'initial'}
            variants={imageVariants}
            transition={transition}
          >
            <div className='transform rotate-12 scale-100 lg:scale-150'>
              <Stars fill="#FFC857" />
            </div>
          </motion.div>
          <motion.div className='absolute right-3 -top-3 transform rotate-45scale-[2]'
            initial="initial"
            animate={inView ? 'hover' : 'initial'}
            variants={imageVariants}
            transition={transition}
          >
            <div className='transform -rotate-12 scale-75 lg:scale-95'>
              <Stars fill="#EF6461" />
            </div>
          </motion.div>
        </motion.div>
        <div id='projects' className='space-y-20 w-full flex flex-col items-center'>
          <Project title='MECS Solutions' 
            desc='A website created from the ground-up during my internship at MECS Solutions'
            link='https://www.mecssolutions.com'
            img='/projects/mecs.svg'
          />
          <Project title='Easi' 
            desc='Easi is a text simplification web app, originally built as a mobile application for my thesis project'
            link='https://easi.vercel.app'
            img='/projects/easi.svg'
          />
          <Project title='Cybergence' 
            desc='An event landing site for our school&apos;s acquiantance party in collaboration with other student devs.'
            link='https://cybergence.vercel.app'
            img='/projects/cybergence.svg'
          />
          <Project title='Takape' 
            desc='A simple local cafe finder within the Panay Island.'
            link='https://takape-vhlum.mongodbstitch.com'
            img='/projects/takape.svg'
          />
        </div>

        {/* about */}
        <div id='about' ref={aboutRef} className='w-full'>
          <About/>
        </div>

        {/* contact */}
        <span id='contact'>
          <Contact/>
        </span>

        <Footer/>
      </div>
    </main>
  )
}
