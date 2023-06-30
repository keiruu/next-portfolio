import { useState } from 'react'
import { motion } from 'framer-motion'
import Stars from './stars'
import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  const imageVariants = {
    initial: { scale: 0, opacity: 0,},
    hover: { scale: 1.2, opacity: 1,},
  };

  return (
    <div className=''>
      <hr className='border-[#2c2c2c]'></hr>
      
      <div className='hidden lg:flex items-center justify-between py-8'>
        <div>
          <motion.div className='relative w-fit' initial='rest' whileHover='hover' animate='rest'>
            <Link href='/' className=''>
                <img src='/logo.svg' alt='aku logo' className='w-12 pb-2'/>
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
          <p className='text-base text-font-color-2'>All rights reserved {currentYear}</p>
          <p className='text-base text-font-color-2'>Made with ❤️ by Abby</p>
        </div>

        <div className='flex gap-6 items-center'>
          <div className='text-font-color-2 flex gap-8'>
            <a href='https://www.linkedin.com/in/abbyunat/' target='_blank' rel='noreferrer' className='hover:text-font-color transition-all'>
              <BsLinkedin className='w-6 lg:w-full'/>
            </a>
            <a href='https://github.com/keiruu' target='_blank' rel='noreferrer' className='hover:text-font-color transition-all'>
              <BsGithub className='w-6 lg:w-full'/>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:hidden items-center justify-center py-8'>
        <div className='flex flex-col justify-center items-center text-center py-4'>
          <motion.div className='relative w-fit' initial='rest' whileHover='hover' animate='rest'>
            <Link href='/'>
              <img src='/logo.svg' alt='aku logo' className='w-12 pb-2'/>
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
          <p className='text-base text-font-color-2'>All rights reserved {currentYear}</p>
          <p className='text-base text-font-color-2'>Made with ❤️ by Abby</p>
        </div>

        <div className='flex gap-6 items-center'>
          <div className='text-font-color-2 flex gap-8'>
            <a href='https://www.linkedin.com/in/abbyunat/' target='_blank' rel='noreferrer' className='hover:text-font-color transition-all'>
              <BsLinkedin className='w-6 lg:w-full'/>
            </a>
            <a href='https://github.com/keiruu' target='_blank' rel='noreferrer' className='hover:text-font-color transition-all'>
              <BsGithub className='w-6 lg:w-full'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
