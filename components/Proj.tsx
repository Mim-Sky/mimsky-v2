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
        <Image 
          src="/portfolio_gowork.png" 
          alt="project screened on different devices" 
          width={450} 
          height={450} 
          className="opacity-80" ></Image>
      </motion.div>
      <section className="space-y-10 px-0 md:px-10 max-w-6xl ">
        <a href="https://www.gowork.pl/blog">
        <h4 className="text-xl md:text-2xl text-center hover:text-[#F7AB0A]">Go Work Blog
          </h4></a>
          <p>New landing page and categories site done with Flexbox, Grid and adjusted PHP for the needs of new layout. Better responsivness and a higher quality of content distribution over the page was the clients goal.</p>
      </section>
    </section>
  )
}
export default project