import React from 'react'
import { motion } from "framer-motion";
import ExpCard from './ExpCard';

type Props = {}

export default function WorkExpirience({}: Props) {
  return (

  <div className="h-screen max-w-full mx-auto" >
    <div className='pt-14'>
        <h3 className=" flex justify-center items-center uppercase tracking-[15px] text-xl text-grey">
          Expirience
        </h3>
      </div> 
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden flex flex-col text-left md:flex-row px-10 justify-evenly items-center">

{/* Slides/Cards */}
    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
      <ExpCard />
      <ExpCard />
      <ExpCard />
      <ExpCard />
    </div>



    </motion.div>

    </div>   
  )
}