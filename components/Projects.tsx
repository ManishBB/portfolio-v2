import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
    const projects=[1,2,3,4,5];
  return (
    <motion.div 
    initial={{opacity: 0}}
    transition={{ duration: 1.5}}
    whileInView={{ opacity: 1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project, i) => (
                    <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2}}
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{once: true}}
                            src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' 
                            className='h-[30px] w-30[30px]'
                        />

                        <div className='space-y-0 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i+1} of {projects.length}:
                                </span> 
                                UPS Clone
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum velit veritatis totam architecto qui earum voluptatem voluptas ut est! Molestias magni deleniti cupiditate, sint possimus ipsum dolorum perferendis ut?
                            </p>

                        </div>
                    </div>
            ))
            }
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects