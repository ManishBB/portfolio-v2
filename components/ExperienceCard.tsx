import React from 'react'
import { motion } from "framer-motion"


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                x:-100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                x:0
            }}
            viewport={{
                once:true
            }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
            src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO</h4>
            <p className='font-bold text-2xl mt-1'>MMNP</p>
            <div className='flex space-x-2 my-2'>
                {/*Tech Stack Used */}
                <img className='h-10 w-10 rounded-full' src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'/>
                <img className='h-10 w-10 rounded-full' src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'/>
                <img className='h-10 w-10 rounded-full' src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started Work Date... - Ended...</p> 
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points of work experiences Summary points of work experiences...</li>
                <li>Summary points of work experiences Summary points of work experiences...</li>
                <li>Summary points of work experiences Summary points of work experiences...</li>
            </ul>
        </div>            
    </article>
  )
}

export default ExperienceCard