import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

function project({}: Props) {
  return (
    <section className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.div
        initial={{
          y: -200,
          opacity: 0
        }} 
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        >
        <Image src="/sample.jpg" alt="project screened on different devices" width={200} height={200}></Image>
      </motion.div>
      <section className="space-y-10 px-0 md:px-10 max-w-6xl ">
        <h4 className="text-4xl font-semibold text-center">My portfolio page
          </h4>
          <p>Portolio page was built with React.js, Typescript, Tailwind CSS for frontend. Nextjs was used for backend. Sanity CMS is being integrated with the project. My goal was to design responsive app with the emphasis on accessibility (WCAG AAA standard).
          </p>
      </section>
    </section>
  )
}

export default project