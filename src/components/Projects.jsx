import React from 'react'
import {motion} from "motion/react"




const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity : 1, y:0}}
        initial ={{opacity:0, y:-100}}
        transition ={{duration: 1.5}}   
        className="my-20 text-center text-4xl">Projects</motion.h1>

      <div className='flex flex-row items-center justify-center' >
          <motion.h1 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100 }}
            transition={{duration: 0.8}}
            className='bg-gradient-to-r from-pink-300 via-slate-500 
            to-purple-500 bg-clip-text text-2xl tracking-tight 
            text-transparent' >Comming Soon !!</motion.h1>
      </div>
    </div>
  )
};

export default Projects;