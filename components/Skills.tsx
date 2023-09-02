import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen mx-auto" >
      <div className='pt-28 flex justify-center'>
        <h3 className="uppercase tracking-[15px] text-xl text-grey">
          Skills
        </h3>
      </div>
    </motion.div>
  )
}