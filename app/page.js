'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Stars from '../components/stars'
import Page from '@/components/page'


const LoadingScreen = () => {

  const popVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 2,
    },
    exit: {
      opacity: 0,
      scale: 0,
    }
  }

  const pageTransition = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
    exit: {
      scale: 0,
    }
  }

  const childVariants = {
    initial: { scale: 0, },
    play: { scale: 1,},
    exit: {
      opacity: 0,
      scale: 0,
    }
  }

  const transition = {
    delay: 0.8
  }

  return (
    <motion.div 
      key="box"
      className='w-fit relative lg:pb-0 pb-10'
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={popVariants}
      transition={{delay: 0.8}}
    >
      <motion.div variants='pageTransition' transition={{duration:1}} initial='visible' animate='hidden' exit='exit' className="absolute scale-[5] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-accent-2"></motion.div>

      <h1 className='text-2xl lg:text-4xl font-bowlby cursor-pointer transform hover:rotate-3 transition-all' 
      >aku</h1>

      <motion.div className=' absolute -left-4 bottom-11 lg:bottom-0'
        initial="initial"
        animate="play"
        variants={childVariants}
        exit="exit"
        transition={{delay: 1.2}}
      >
        <Stars fill="#d88f61" />
      </motion.div>
      <motion.div className='absolute right-2 lg:right-4 -top-1 lg:top-0'
        initial="initial"
        animate="play"
        variants={childVariants}
        exit="exit"
        transition={{delay: 1}}
      >
        <Stars fill="#FFC857" />
      </motion.div>
      <motion.div className='absolute -right-4 bottom-10 lg:bottom-2'
        initial="initial"
        animate="play"
        variants={childVariants}
        exit="exit"
        transition={{delay: 1.4}}
      >
        <Stars fill="#EF6461" />
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 1000)
    }, 3000)
  }, [])

  return (
    <div className={`font-inter bg-background text-font-color ${!showContent && 'overflow-hidden'}`}>
      <AnimatePresence mode='wait'>
        {/* {isLoading && (
          <motion.div className='w-full h-screen flex justify-center items-center'>
            <LoadingScreen />
          </motion.div>
        )} 
        {showContent && (
          <motion.div>
            <Page/>
          </motion.div>
        )} */}
        <motion.div>
          <Page/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
