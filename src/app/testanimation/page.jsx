"use client"

import React from 'react'
import {motion} from 'framer-motion'

const TestPage = () => {

  const varients = {
    varient1: {
        x:400, y:300, opacity:0.5,
        transition: {
            duration: 3,
        }
    },
    varient2: {
        x:100, y:-300, rotation: 90,
        transition: {
            duration: 3,
            delay: 0
        }
    }
  }

  return (
    <div className='h-full flex items-center justify-center'>
        <motion.div 
            className="w-96 h-96 bg-red-400 rounded" 
            initial={{x:-100}} 
            varients={varients}
            animate="varient2"
            // animate={{x:400, y:300, opacity:0.5, rotate: 270}}
            // transition={{delay:0, duration:4}}>
            >
        </motion.div>
    </div>
  )
}

export default TestPage