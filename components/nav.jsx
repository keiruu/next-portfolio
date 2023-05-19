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

  return (
    <div className='flex justify-between mx-auto my-8 w-[80%] items-center'>
      
      <motion.div className='relative' initial='rest' whileHover='hover' animate='rest'>
        <Link href='/'>
          <h1 className='text-2xl lg:text-4xl font-bowlby cursor-pointer transform hover:rotate-3 transition-all' 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >aku</h1>
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

      <div className='space-x-3 lg:space-x-11'>
        <MenuItem targetId="home" menuText="Home"/>
        <MenuItem targetId="projects" menuText="Projects"/>
        <MenuItem targetId="about" menuText="About"/>
        <MenuItem targetId="contact" menuText="Contact"/>
      </div>

    </div>
  )
}
