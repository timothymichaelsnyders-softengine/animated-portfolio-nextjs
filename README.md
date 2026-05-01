This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## -----------------------------------------------------
|   This application uses the technologies:            |
|   1. `Next.js` : https://nextjs.org/docs             |
|   2. `TailwindCSS` : https://v2.tailwindcss.com/docs |
|   3. `Framer Motion` : https://motion.dev/           |
## -----------------------------------------------------


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## -------------------------------------------------------------------------------

## Start
---
- Because we don't have any of the dependencies installed yet, we cannot execute `npm run dev` yet.
- In the terminal, execute `npm i`.
    > This will create a new folder `node_modules`
- Then execute `npm run dev`.
- Open on `http://localhost:3000/`

## Installing Framer Motion
---
> npm i framer-motion

[[ 
    NOTE TO SELF : Next.js uses pages in the `src/app` directory. So Create a new folder with the url extention that you want,
    eg. src/app/testanimation/page.jsx

    In the URL of the browser, the page.jsx in the `testanimation` directory can be accessed by localhost:3000/testanimation
]]

## Scroll / Moving Brain.
- Create the `Brain` component.
- We need to calculate our scroll position, so for that we need to `import` `useScroll` from `framer-motion`.
- useScroll needs a container as an `argument`, so we will give the entire `container` as the argument. [the className='container'].

- So we will have:
    >  const {} = useScroll({container});

- But the container needs to be specified using `useRef()`

- So creata a variable `containerRef` = useRef()
- So in the `className="container"` div, add a `ref={containerRef}`.

- Destructure and get the variable scrollYProgress from `useScroll()`:
    > const {scrollYProgress} = useScroll({container:containerRef});

- Pass it as a prop to `<Brain />` component.

- In the <Brain /> component, create variables for the motion of the brain, eg:
    > const rotateForward = useTransform(scrollYProgress, [0, 1], [0, 360])
    - This means that the entire layout is from 0 (beginning of the page) to 1 (end of the page),
    - So as scroll down, the objects will rotate from 0 (0) to 1 (at the end of the page - 360 degrees).

- Now that we have the objects that move in the `svg`, we can attach the `scrollTransform` into these objects.
    > [ Make sure that you place the `style={{rotate:rotateForward}}` on the `<motion.div>` tags ]

-----------
# We will use the same scrolling function for the `Portfolio`
- We will use our `y` position, and using this position, we will scroll our items on the `x-axis`.
-----------

- To allow external images, add this to the `next.config.mjs` file:
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pexels.com",
            }
        ]
    }
};

export default nextConfig;

The `PortfolioPage.jsx` page should be:

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
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
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

## Now the `ContactPage`
---

Add the following code: for the text on the left:

"use client"

import { motion } from "framer-motion"

const ContactPage = () => {

  const text = "Say Hello"

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
                <motion.span 
                key={index} 
                initial={{opacity:1}} 
                animate={{opacity:0}} 
                transition={{duration:3, repeat: Infinity, delay:index * 0.1}}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2"></div>
      </div>
    </motion.div>
  )
}

export default ContactPage

- Create useStates for sending messages:
    > const [success, setSuccess] = useState(false);
    > const [error, setError] = useState(false);

- Add this variable to the end of the form:
<button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
{
    success && <span className="text-green-600 font-semibold">Your message was sent successfully.</span>
}
{
    error && <span className="text-red-600 font-semibold">Something went wrong.</span>
}

- We will sue `EmailJS` for sending emails.
- Create a new account, sign in.
- Add a new service, `Gmail`, connect, & copy the `service ID`.
- Create a `.env` file in the root directory.
- Add a variable in the `.env` file called `NEXT_PUBLIC_SERVICE_ID`  = "[the id that you copied]"
- Write this into your `gitignore` file (under `local env files`):
    > .env
- Create a new `Email Template` on EmailJS.
{{name}}
{{time}}
{{message}}

- Install emailjs using the terminal:
    > npm i @emailjs/browser
- Check the docuemtation for `React`.

- Basically, create a ref hook for the for:
    > const form = useRef()

    <form ref={form}.....>
    </form>

- Add an `onSubmit` event to the form:
    > <form ref={form} onSubmit={sendEmail}>
    .....
    </form>

- Create a `sendEmail` function:

import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR SERVICE ID', 'YOUR TEMPLATE ID', form.current, 'YOUR PUBLIC KEY')
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    });
};

- Make sure you set up the PUBLIC_KEY, TEMPLATE_ID & SERVICE_KEY in `EmailJS` console (online).
- The `sendEmail` function:
const sendEmail = (e) => {
    e.preventDefault();
    // precautions:
    setError(false);
    setSuccess(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text)
        setSuccess(true)
        form.current.reset()
    }, (error) => {
        console.log(error.text)
        setError(true);
    });
};

- <form onSubmit={sendEmail} .....></form>

- TEST!!!!

## Deploy
---

To do this we will need to `build` our application!