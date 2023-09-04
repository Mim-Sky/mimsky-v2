import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

function project({}: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
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
          <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
            <h4 className="text-4xl font-semibold text-center">Go Work Blog
             </h4>
             <p>New landing page and categories done with Flexbox, Grid and adjusted PHP for the needs of new layout. Better responsivness and a higher quality of content distribution over the page was the clients goal.</p>
          </div>
        </div>
  )
}

export default project