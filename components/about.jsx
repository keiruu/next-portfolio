import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Tech from './tech'

export default function About() {
  return (
    <div className='bg-accent-3 pb-32 mt-32 overflow-hidden'>
      <img src='divider.svg' alt='' className='w-full'/>
      <div className='flex flex-col lg:flex-row gap-10 justify-center pt-20 px-6 lg:px-40'>
        <div className='text-center flex flex-row lg:flex-col gap-5 lg:items-center items-end'>
          <img src='me.svg' alt='A photo of Abigail' className='lg:w-80 w-40'/>
          <h2 className='font-bowlby lg:block hidden text-5xl'>about <span className='text-accent-1'>me.</span></h2>
          <h2 className='font-bowlby lg:hidden text-3xl text-left'>
            about<br/><span className='text-accent-1 text-6xl'>me.</span>
          </h2>
        </div>
        <div className='space-y-4'>
          <h3 className='lg:text-4xl text-2xl font-bowlby'>Abigail Kaye Unating</h3>
          <p className='text-font-color-2 text-sm lg:text-base lg:w-3/4'>
            I&apos;m currently a senior at West Visayas State University (Iloilo) pursuing a Bachelor&apos;s Degree in Information Technology majoring in Software Technologies.
            <br/><br/>
            I am always willing to learn new tech. Nowadays, I&apos;ve been focusing on building web apps with <b>React</b> and mobile apps using <b>Flutter</b>.
          </p>
          <a href='/resume.pdf' target="_blank" rel="noreferrer">
            <button className='group flex items-center gap-1 text-base lg:text-xl text-accent-2'>
              View Resume <FiArrowUpRight className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
            </button>
          </a>
          <div>
            <h5 className='font-bowlby text-base lg:text-xl mt-8 text-[#ededed]'>Technologies I&apos;ve worked with</h5>
            <Tech/>
          </div> 
        </div>
      </div>
    </div>
  )
}
