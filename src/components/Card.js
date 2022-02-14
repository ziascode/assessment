import React from 'react';
import arrowIcon from '../assets/arrow-icon.svg';
import {motion} from 'framer-motion'

function Card({title, thumbnail, link, category, desc}) {
  return (
    <motion.div 
      layout
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      className='flex space-x-7 w-full sm:w-11/12 h-[16.6rem] my-6 pr-2 font-roboto my-8 borders rounded-md ease-in-out '>

        <div className='relative h-64 w-48'> 
            <img className='object-cover h-full w-auto' src={thumbnail} alt="" />
        </div>
        <div className="relative h-64 w-72 border-0">
            <p className='absolute top-0 text-xs w-full border-b-2 border-gray-100 pb-1'>{category}</p>
            <div className='absolute top-12 space-y-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-sm'>{desc}</p>
            </div>
            
            <a className='absolute top-52 right-0 border-2 border-white px-2 py-1 flex items-center space-x-2 hover:scale-105 duration-200 ease-out' href={link} target="_blank"><button className='text-[10px] font-semibold'>
                <p>VIEW CASE STUDY</p></button><img className='h-2' src={arrowIcon} alt="" /></a>
        </div>

    </motion.div>
  )
}

export default Card

