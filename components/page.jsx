'use client'

import Nav from '@/components/nav'
import Project from '@/components/project'
import Stars from '@/components/stars'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { FiArrowUp } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect, useState, MouseEvent } from 'react'
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

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }


  return (
    <main className='overflow-hidden group/mouse relative shadow-2xl' onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/mouse:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(52, 49, 80, 0.30),
              transparent 100%
            )
          `,
        }}
      />
      <div className='absolute top-20 right-10 z-0'>
        <div className="w-[220px] h-[220px] rounded-full bg-[#AF85EE] opacity-30 blur-[100px]"
        ></div>
      </div>
      <Nav/>
      <div className='w-[85%] lg:w-[70%] relative mx-auto flex flex-col justify-center space-y-14 lg:space-y-20 text-4xl'>
        {/* header */}
        <Header/>
        <div className='absolute top-[10%] -left-40'>
          <div className="w-[220px] h-[220px] rounded-full bg-[#83BCBB] opacity-30 blur-[100px]"></div>
        </div>

        {/* projects */}
        <motion.div id='projects' className='relative' initial='rest' whileHover='hover' animate='rest'>
          <div className='flex justify-center lg:justify-between w-fit gap-2 lg:gap-3 items-center'>
            <img src='open.svg' className='w-[18px] lg:w-fit'/>
            <h1 className='text-lg lg:text-3xl font-bold' ref={ref}>Projects I&apos;ve worked on</h1>     
            <img src='close.svg' className='w-8 lg:w-fit'/>
          </div>
          {/* <motion.div className='absolute -right-5 -top-5'
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
          </motion.div> */}
        </motion.div>
        <div className='space-y-20 w-full flex flex-col items-center'>
          <Project title='Annountr' 
            desc='A glorified announcement organizer'
            link='https://annountr.vercel.app/'
            img='/projects/annountr.svg'
            tags='Typescript Next.js Tailwind React Node.js Express Prisma'
          />
          <Project title='MECS Solutions' 
            desc='A website created from the ground-up during my internship at MECS Solutions'
            link='https://www.mecssolutions.com'
            img='/projects/mecs.svg'
            tags='Next.js Tailwind React'
          />
          <Project title='Easi' 
            desc='Easi is a text simplification web app, originally built as a mobile application for my thesis project'
            link='https://easi.vercel.app'
            img='/projects/easi.svg'
            tags='Flask Flutter Express Next.js Tailwind React'
          />
          <Project title='Cybergence' 
            desc='An event landing site for our school&apos;s acquiantance party in collaboration with other student devs.'
            link='https://cybergence.vercel.app'
            img='/projects/cybergence.svg'
            tags='Next.js Tailwind React'
          />
          <Project title='Takape' 
            desc='A simple local cafe finder within the Panay Island.'
            link='https://takape-vhlum.mongodbstitch.com'
            img='/projects/takape.svg'
            tags='MongoDB Express React Next.js Node.js Tailwind'
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
      <button 
        className={`fixed bottom-4 right-4 bg-accent-2 rounded-full p-4 hover:-translate-y-1 transition-all transform ${
          isVisible ? 'visible' : 'invisible'
        }`}
        onClick={scrollToTop}
      >
        <FiArrowUp size={22}/>
      </button>
    </main>
  )
}
