"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar"
import {motion} from 'framer-motion'
import { usePathname } from "next/navigation"

const TransitionProvider = ({children}) => {
    
    // we will use pathName as the "key" in the div down below because this is the element that changes and we'll use it to trigger the animation.
    const pathName = usePathname();
  
    return (
    // mode="wait" means that it will run the animations one after the other as coded : from first coded div to last. 
    <AnimatePresence mode="wait">
        {/* This used to be inside the `layout.js` file between <body> tags */}
        {/* The `key` is the changing variable that triggers the animation */}
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
            {/* FIRST DIV : DOWNWARDS */}
            <motion.div 
                className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" 
                animate={{height:"0vh"}}
                exit={{height:"140vh"}}
                transition={{duration:0.5, ease:"easeOut"}}
            />
            {/* PATHNAME DIV */}
            <motion.div 
                className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit" 
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{duration:0.8, ease:"easeOut"}}
            >
            {pathName.toUpperCase().substring(1, pathName.length)}    
            </motion.div>
            {/* EXIT DIV */}
            <motion.div 
                className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40" 
                initial={{height:"140vh"}}
                animate={{height:"0vh", transition:{ delay:0.5 }}}
            />
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider