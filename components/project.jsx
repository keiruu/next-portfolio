import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Project (props) {
  const { title, desc, link, img, tags} = props
  const techTags = tags.split(' ')

  return (
    <a href={link} target='_blank' rel='noreferrer' 
    className='w-full hover:drop-shadow-xl drop-shadow-none border border-accent-3 transition-all relative overflow-hidden flex flex-col lg:flex-row justify-between items-center 
    bg-[#28272F] hover:bg-opacity-100 bg-opacity-25 px-8 lg:px-24 py-10 lg:py-20 rounded-[30px] gap-12'>
      <div className='w-full lg:w-1/2'>
        <img src={img} alt={`${title} image`}/>
      </div>
      <div className='space-y-4 lg:space-y-8 lg:w-1/2'>
        <div className='w-full flex justify-center md:justify-start items-center md:items-start'>
          <div className='font-semibold w-fit mt-3 text-base text-center lg:text-2xl 2xl:text-3xl rounded-full bg-accent-1 py-3 lg:py-4 px-8 lg:px-16 text-background'>
            {title}
          </div>
        </div>
        <p className='text-base text-font-color-2'>{desc}</p>
        <a  href={link} target='_blank' rel='noreferrer' className='group w-fit flex items-center gap-1 text-sm lg:text-xl text-accent-2'>
          View Live <FiArrowUpRight className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
        </a>
        {/* <a href={link} target='_blank' rel='noreferrer' className='group flex items-center gap-1 text-sm lg:text-xl text-accent-2'>
          View Live <FiArrowUpRight size={30} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
        </a> */}
        <div className='flex flex-wrap gap-2'>
        {techTags.map((e) => (
          <div key={e} className='text-xs bg-[#353259] text-[#9F9FA0] rounded-full px-6 py-3'>
            {e}
          </div>
        ))}
        </div>

      </div>
    </a>
  )
}