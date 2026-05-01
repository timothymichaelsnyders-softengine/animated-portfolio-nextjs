"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"

const PortfolioPage = () => {
  const ref = useRef();

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "React.js Live Chat App",
      desc: "React.js & Firebase interactive web chat application.",
      img: "/React_Chat_App.png",
      link: "https://codex-reactjs-chat.netlify.app/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "MERN Todo Task Application",
      desc: "A full stack MERN web application for creating, updating and deleting todo tasks.",
      img: "/MERN_Todo_Tasks_App.png",
      link: "https://github.com/timothymichaelsnyders-softengine/MERN_to-do_application",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "PHP Full Stack E-Commerce",
      desc: "Third year E-commerce website built using PHP, HTML, CSS, Javascript, MySQL..",
      img: "/Minima_ECommerce.png",
      link: "https://github.com/timothymichaelsnyders-softengine/Full_Stack_E-commerice_website",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Car Wash Booking App",
      desc: "An android booking system developed for Rinso Car wash @ Mall of Africa..",
      img: "/RINSO_Car_Wash_Demo.png",
      link: "https://lama.dev",
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300",
      title: "Django Social Media App",
      desc: "A Full Stack Social Media Application built using Django, HTML, CSS (Bootstrap) and JavaScript.",
      img: "/How-to-Clear-Pinterest-Feed.png",
      link: "https://github.com/timothymichaelsnyders-softengine/Social-Media-Full-Stack-Project",
    },
  ];

  const {scrollYProgress} = useScroll({target:ref});
  /*
    Now we'll move things on the x-axis
  */
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])

  return (
    <motion.div className="h-full"
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
        <div className="sticky top-0 flex h-screen gap- 4 items-center overflow-hidden">
          <motion.div style={{ x:x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map(item=>(
              <div 
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
                key={item.id}
              >
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  <Image src={item.img} alt="" fill />
                </div>
                <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                <Link href={item.link} className="flex justify-end">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded ">
                    See Demo
                  </button>
                </Link>
              </div>
            </div>))}
          </motion.div>
        </div>
      </div>
          <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
             <h1 className="text-8xl">Do you have a project?</h1>
             <div className="relative">
              <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat: Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                <defs>
                  <path 
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60, 60 0 0,1, 120,0 a 60, 60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">Font-end Developer & UI Designer</textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                >
                  Hire Me
                </Link>
             </div>
          </div>
    </motion.div>
  )
}

export default PortfolioPage