import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoFirebase } from "react-icons/io5"
import { SiTypescript, SiTailwindcss, SiFlutter, SiPrisma, SiPostgresql, SiExpress, SiGit, SiGithub, SiNextdotjs, SiFigma} from 'react-icons/si'

export default function About() {
  return (
    <div className='pb-12 lg:pb-32 mt-32'>
      <div className='flex justify-between w-fit gap-3 items-center pb-8 lg:pb-16'>
        <img src='open.svg' className='w-[18px] lg:w-fit'/>
        <h1 className='text-lg lg:text-3xl font-bold'>About Me</h1>     
        <img src='close.svg' className='w-8 lg:w-fit'/>
      </div>
      <div className='flex lg:flex-row flex-col gap-8 justify-between w-full'>
        <div className='flex flex-col justify-center w-full lg:w-1/2 space-y-4 lg:space-y-6 bg-[#28272F] bg-opacity-25 p-8 lg:p-14 rounded-[30px] border border-accent-3 '>
          <img src='me.svg' alt='A photo of Abigail' className='w-full'/>
          <h2 className='font-semibold text-xl lg:text-3xl'>Abigail Kaye Unating</h2>
          <p className='text-xs lg:text-base'>
            I am always willing to learn new tech. Nowadays, 
            I&apos;ve been focusing on building web apps with React and learning 
            everything that I can to improve myself. <br/>
            
            Outside of work, I enjoy playing video games, watching anime & kdrama, and building keyboards ⌨️
            </p>

          <a href='/resume.pdf' target="_blank" rel="noreferrer" className='w-fit'>
            <button className='group w-fit flex items-center gap-1 text-base lg:text-xl text-accent-2'>
              View Resume <FiArrowUpRight className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
            </button>
          </a>
          <div className='flex gap-3'>
            <motion.a href='https://www.linkedin.com/in/abbyunat/' target='_blank' rel='noreferrer'>
              <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-4 lg:p-5 border-font-color-2 hover:border-white transition-all'>
                <BsLinkedin size={18}/>
              </button>
            </motion.a>
            <motion.a href='https://github.com/keiruu' target='_blank' rel='noreferrer'>
              <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full border p-4 lg:p-5 border-font-color-2 hover:border-white transition-all'>
                <BsGithub size={18}/>
              </button>
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 space-y-10'>
          <div className='space-y-5'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Experience & Education</h3>
            <div className='text-xs lg:text-sm text-[#9F9FA0]'>
              <p className='font-semibold text-white'>Bachelor&apos;s Degree in Information Technology</p>
              <p>major in Software Technologies</p>
              <p>Magna Cum Laude, June 2023</p>
              <p>📍 <a href='https://www.facebook.com/wvsufb' rel='noreferrer' target='_blank' className='underline'>West Visayas State University</a>, Iloilo City, Philippines</p>
            </div>
            <div className='text-xs lg:text-sm text-[#9F9FA0]'>
              <p className='font-semibold text-white'>Full Stack Developer Intern</p>
              <p>major in Software Technologies</p>
              <p>February - May 2023</p>
              <p>📍 <a href='https://www.mecssolutions.com' rel='noreferrer' target='_blank' className='underline'>MECS Solutions</a>, Iloilo City, Philippines</p>
            </div>
            <div className='text-xs lg:text-sm text-[#9F9FA0]'>
              <p className='font-semibold text-white'>Full Stack Developer Intern</p>
              <p>major in Software Technologies</p>
              <p>October - December 2021</p>
              <p>📍 <a href='https://www.linkedin.com/company/sqme-professionals-inc/' rel='noreferrer' target='_blank' className='underline'>SQME Professionals Inc.</a>, Pasig City, Philippines</p>
            </div>
          </div>
          <div className='space-y-5'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Technologies</h3>
            <div className='flex flex-wrap gap-3 w-full'>
              <Tech title='Javascript' logo={<IoLogoJavascript/>}/>
              <Tech title='Typescript' logo={<SiTypescript/>}/>
              <Tech title='React.js' logo={<IoLogoReact/>}/>
              <Tech title='Node.js' logo={<SiNextdotjs/>}/>
              <Tech title='Express.js' logo={<SiExpress/>}/>
              <Tech title='Next.js' logo={<IoLogoJavascript/>}/>
              <Tech title='Tailwind.css' logo={<SiTailwindcss/>}/>
              <Tech title='HTML' logo={<IoLogoHtml5/>}/>
              <Tech title='CSS' logo={<IoLogoCss3/>}/>
              <Tech title='Python' logo={<IoLogoPython/>}/>
              <Tech title='Flutter' logo={<SiFlutter/>}/>
              <Tech title='Prisma' logo={<SiPrisma/>}/>
              <Tech title='PostgreSQL' logo={<SiPostgresql/>}/>
              <Tech title='Firebase' logo={<IoLogoFirebase/>}/>
              <Tech title='Git & GitHub' logo={<SiGit/>}/>
              <Tech title='Figma' logo={<SiFigma/>}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tech = (props) => {
  const { title, logo} = props

  return (
    <div 
    className='flex items-center justify-between gap-2 w-fit rounded-full bg-[#373361] text-[#9593AB] px-5 py-3 text-xs lg:text-sm'>
      {logo} {title}
    </div>

  )
}