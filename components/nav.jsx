import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Stars from './stars'
import MenuItem from './menuItem'

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  const imageVariants = {
    initial: { scale: 0, opacity: 0,},
    hover: { scale: 1.2, opacity: 1,},
  };

  const menuVariants = {
    hidden: {
      y: 0.1,
    },
    visible: {
      y: 0,
      transition: {
        delay: 2,
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const menuChildVariants = {
    hidden: {
      y: -35,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className='flex justify-between mx-auto py-8 w-[85%] lg:w-[70%] items-center lg:px-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2}}
      >
        <motion.div className='relative' initial='rest' whileHover='hover' animate='rest'>
          <Link href='/'>
            <img src='/logo.svg' alt='aku logo'/>
            {/* <h1 className='text-2xl lg:text-4xl font-bowlby cursor-pointer transform hover:rotate-3 transition-all' 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >aku</h1> */}
          </Link>

          <motion.div className='absolute -left-4 bottom-0'
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={imageVariants}
          >
            <Stars fill="#6184D8" />
          </motion.div>
          <motion.div className='absolute right-4 top-0'
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={imageVariants}
          >
            <Stars fill="#FFC857" />
          </motion.div>
          <motion.div className='absolute -right-4 bottom-2'
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={imageVariants}
          >
            <Stars fill="#EF6461" />
          </motion.div>

        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        className=' space-x-3 lg:space-x-11 text-font-color-2'
      >
        <motion.span variants={menuChildVariants} className='inline-block'><MenuItem targetId="projects" menuText="Projects"/></motion.span>
        <motion.span variants={menuChildVariants} className='inline-block'><MenuItem targetId="about" menuText="About"/></motion.span>
        <motion.span variants={menuChildVariants} className='inline-block'><MenuItem targetId="contact" menuText="Contact"/></motion.span>
      </motion.div>

      {/* <motion.a 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        href='/resume.pdf' target="_blank" rel="noreferrer"
        className='relative z-40'
      >
        <button className='text-sm lg:text-base rounded-full px-8 py-3 border border-accent-4 hover:border-white transition-all bg-accent-4 font-bowlby tracking-wider'>
          Hire Me
        </button>
      </motion.a> */}
    </motion.div>
  )
}
