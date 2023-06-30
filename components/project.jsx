import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Project (props) {
  const { title, desc, link, img, tags} = props
  const techTags = tags.split(' ')

  return (
    <a href={link} target='_blank' rel='noreferrer' 
    className='w-fit hover:drop-shadow-xl drop-shadow-none border border-accent-3 transition-all relative overflow-hidden flex flex-col lg:flex-row justify-between items-center 
    bg-[#28272F] hover:bg-opacity-100 bg-opacity-25 px-8 lg:px-24 py-10 lg:py-20 rounded-[30px] gap-12'>
      <div className='w-1/2'>
        <img src={img} alt={`$title image`}/>
      </div>
      <div className='space-y-4 lg:space-y-8 lg:w-1/2'>
        <div className='font-semibold w-fit mt-3 text-base text-center lg:text-2xl 2xl:text-3xl rounded-full bg-accent-1 py-4 px-8 lg:px-16 text-background'>
          {title}
        </div>
        <p className='text-base text-font-color-2'>{desc}</p>
        <a href={link} target='_blank' rel='noreferrer' className='group flex items-center gap-1 text-base lg:text-xl text-accent-2'>
          View Live <FiArrowUpRight size={30} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
        </a>
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

// <a href={link} target='_blank' rel='noreferrer' className='hover:border-accent-1 border border-accent-3 transition-all relative overflow-hidden flex flex-col lg:flex-row justify-between items-center bg-accent-3 w-[80%] px-8 lg:px-24 pt-36 pb-14 lg:pt-40 lg:pb-24 rounded-[30px]'>
//     <img src='line.svg' alt='line' className='absolute -top-1 left-8 lg:left-16 w-56 lg:w-72'/>
//     <div className='space-y-8 lg:w-1/2'>
//       <div className='block lg:hidden'>
//         <img src={img} alt={`$title image`}/>
//       </div>
//       <div className='w-fit mt-3 font-bowlby text-base text-center lg:text-2xl 2xl:text-3xl rounded-full bg-accent-1 py-3 lg:py-6 px-8 lg:px-16 text-background'>
//         {title}
//       </div>
//       <p className='text-base lg:text-xl text-font-color-2 lg:w-[80%]'>{desc}</p>
//       <a href={link} target='_blank' rel='noreferrer' className='group flex items-center gap-1 text-xl text-accent-2'>
//         View Live <FiArrowUpRight size={30} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-all transform'/>
//       </a>
//     </div>
//     <div className='w-1/2 lg:block hidden'>
//       <img src={img} alt={`$title image`}/>
//     </div>
//   </a>