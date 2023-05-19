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
    <main>
      <Nav/>
      <div className='mx-auto flex flex-col justify-center space-y-14 lg:space-y-20 items-center text-4xl'>
        {/* header */}
        <div className='mt-20 2xl:mt-40 mx-auto'>
          <p className='pl-[6vw] font-bowlby text-2xl lg:text-4xl'>hi I&apos;m</p>
          <div className='cursor-default group relative mt-1 lg:mt-3 font-bowlby text-center text-4xl xl:text-6xl 2xl:text-8xl rounded-full bg-accent-1 py-8 lg:py-12 px-16 lg:px-28 text-background'>
            abigail
            <div className='float absolute -top-6 -left-4 lg:-left-10 scale-[2] transform'>
              <Stars fill="#EF6461"/>
            </div>
            <div className='float absolute top-0 -left-2 lg:-left-4 scale-[2] transform'>
              <Stars fill="#6184D8"/>
            </div>
            <div className='float absolute bottom-2 -right-3 lg:-right-6 scale-[2] transform'>
              <Stars fill="#E3879E"/>
            </div>
            <div className='float absolute -bottom-4 right-2 lg:right-0 scale-[2] transform'>
              <Stars fill="#6184D8"/>
            </div>
            <img src='hire.svg' className='transform translate-y-20 rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all group-hover:-rotate-3 absolute -top-28 -right-10' alt='A chat bubble that says Abigail is available for hire'/>
          </div>
          <p className='text-center pt-10 text-sm lg:text-lg 2xl:text-xl text-font-color-2'>I&apos;m a <span className='text-font-color-1'><b>Full Stack Developer</b></span> from the Philippines. </p>
        </div>

        {/* arrow */}
        <div className='pb-40'>
          <a href='#' target="_blank" rel="noreferrer">
            <button className='hover:text-white transition-all font-bowlby text-xs lg:text-lg rounded-full bg-accent-4 py-3 lg:py-4 px-6 lg:px-10 text-background'>
              view resume
            </button>
          </a>
          {/* <img className='mt-20 mx-auto animate-small-bounce' src='arrow.svg' alt='down arrow'/> */}
        </div>

        {/* stars */}
        <motion.div className='relative' initial='rest' whileHover='hover' animate='rest'>
          <h1 className='font-bold text-2xl lg:text-4xl' ref={ref}>Stuff I&apos;ve worked on</h1>    
          <motion.div className='absolute -left-4 bottom-0'
            initial="initial"
            animate={inView ? 'hover' : 'initial'}
            variants={imageVariants}
            transition={transition}
          >
            <Stars fill="#6184D8" />
          </motion.div>
          <motion.div className='absolute right-4 top-0'
            initial="initial"
            animate={inView ? 'hover' : 'initial'}
            variants={imageVariants}
            transition={transition}
          >
            <Stars fill="#FFC857" />
          </motion.div>
          <motion.div className='absolute -right-4 bottom-2'
            initial="initial"
            animate={inView ? 'hover' : 'initial'}
            variants={imageVariants}
            transition={transition}
          >
            <Stars fill="#EF6461" />
          </motion.div>
        </motion.div>

        {/* projects */}
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
        <div id='about' ref={aboutRef} className='p-8 lg:p-20 mt-40 space-y-8 lg:space-y-12 rounded-[30px] w-[80%] mx-auto border-accent-1 border-4'>
          {/* first row */}
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-[78px]'>
            <img src='me.svg' alt='Abigail' className='w-40 lg:w-72'/>
            
            <div className='flex flex-col gap-4 items-center lg:items-start'>
              <motion.div className='relative w-fit' initial='rest' whileHover='hover' animate='rest'>
                <h1 className='font-bold text-2xl lg:text-6xl' ref={aboutRef}>About me</h1>    
                <motion.div className='absolute -left-4 bottom-0'
                  initial="initial"
                  animate={aboutInView ? 'hover' : 'initial'}
                  variants={imageVariants}
                  transition={transition}
                >
                  <Stars fill="#6184D8" />
                </motion.div>
                <motion.div className='absolute right-4 top-0'
                  initial="initial"
                  animate={aboutInView ? 'hover' : 'initial'}
                  variants={imageVariants}
                  transition={transition}
                >
                  <Stars fill="#FFC857" />
                </motion.div>
                <motion.div className='absolute -right-4 bottom-2'
                  initial="initial"
                  animate={aboutInView ? 'hover' : 'initial'}
                  variants={imageVariants}
                  transition={transition}
                >
                  <Stars fill="#EF6461" />
                </motion.div>
              </motion.div>

              <p className='text-sm lg:text-xl text-font-color-2'>
                I&apos;m currently a senior at West Visayas State University (Iloilo) pursuing a Bachelor&apos;s Degree in Information Technology majoring in Software Technologies.
                <br/><br/>
                I am always willing to learn new tech. Nowadays, I&apos;ve been focusing on building web apps with <strong>React</strong> and mobile apps using <strong>Flutter</strong>.
              </p>
              <Link href='#' className='group flex items-center gap-1 text-base lg:text-2xl text-accent-2'>
                View Resume <FiArrowUpRight className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
              </Link>
            </div>
          </div>

          <div>
            <h5 className='font-medium text-base lg:text-2xl'><i>Technologies I&apos;ve worked with</i></h5>
            <Tech/>
          </div>
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
