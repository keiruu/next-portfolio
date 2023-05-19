import { useState } from 'react'
import { motion } from 'framer-motion'
import Stars from './stars'
import { TbCopy } from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('abigailkaye.unating@gmail.com')
      .then(() => {
        setCopied(true)
        toast.success('Email copied!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }
    
  const imageVariants = {
    initial: { scale: 0, opacity: 0,},
    hover: { scale: 1.2, opacity: 1,},
  }
  
  return (
    <div className='flex flex-col items-center text-center gap-2 py-28 lg:py-40'>
      <h3 className='font-bowlby text-2xl lg:text-5xl'><span className='text-accent-1'>Reach</span> out to me</h3>
      <p className='text-font-color-2 text-sm lg:text-xl w-[80%] lg:w-[40%]'>I&apos;m always open to new opportunities, collaborations, and connections. Whether you have a project you&apos;d like to discuss, want to share your work, or just say hi! Feel free to reach out.</p>
      
      <motion.div className='relative mt-4' initial='rest' whileHover='hover' animate='rest'>
        <div className='flex gap-2'>
          <TbCopy className={copied ? 'text-accent-1' : 'text-white'}/>
          <button onClick={handleCopy} className='text-lg lg:text-3xl underline hover:text-accent-1 transition-all'> abigailkaye.unating@gmail.com</button>
        </div>

        <motion.div className='absolute -left-4 bottom-0'
          initial="initial"
          animate={copied ? 'hover' : 'initial'}
          variants={imageVariants}
        >
          <Stars fill="#6184D8" />
        </motion.div>
        <motion.div className='absolute right-4 top-0'
          initial="initial"
          animate={copied ? 'hover' : 'initial'}
          variants={imageVariants}
        >
          <Stars fill="#FFC857" />
        </motion.div>
        <motion.div className='absolute -right-4 bottom-2'
          initial="initial"
          animate={copied ? 'hover' : 'initial'}
          variants={imageVariants}
        >
          <Stars fill="#EF6461" />
        </motion.div>
      </motion.div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        className='text-xl'
      />
    </div>
  )
}
