import React from 'react'
import { motion } from "framer-motion"


type Props = {}

const About = (props: Props) => {
  return (
    <motion.div

    initial={{
        opacity: 0
    }}
    transition={{
        duration: 1.5
    }}
    whileInView={{
        opacity: 1,
    }}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
            initial={{
                x:-200,
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
            src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />        

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl text-semibold'>
                Here's a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sit tempore magnam incidunt, voluptatem minima mollitia, commodi, laboriosam cupiditate eveniet eos a totam eius et necessitatibus repudiandae voluptas pariatur id natus. Vel aspernatur, dignissimos tempore ullam molestiae aut perspiciatis quasi quod sed dicta possimus voluptatum consequatur quam vero nostrum cupiditate rem, magni sit nihil voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo similique totam nam quas exercitationem illo facere sequi, ullam hic magnam consequatur iure. Totam deserunt omnis sed laudantium debitis numquam voluptatem quos et in facilis officiis, fugiat minima doloribus veniam reprehenderit voluptas atque quidem fugit ipsam est mollitia id. Perspiciatis.
            </p>
        </div>
    </motion.div>
  )
}

export default About