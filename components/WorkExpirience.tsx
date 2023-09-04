import React from 'react'
import { motion } from "framer-motion";
import ExpCard from './ExpCard';
import ExpCardTvn from './ExpCardTvn';
import ExpCardRe from './ExpCardRe';
import ExpCardLotus from './ExpCardLotus';
import ExpCardCurr from './ExpCardCurr';

type Props = {}

export default function WorkExpirience({}: Props) {
  return (
  <article className="h-screen  mx-auto">
    <section className="flex-col pt-24">
      <h3 className="flex justify-center items-center uppercase tracking-[15px] text-xl text-grey">
        Expirience
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="overflow-hidden text-left md:flex-row md:py-24 px-10 items-center">
        <section className="w-full h-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-siteYellow/50">
          <ExpCard />
          <ExpCardCurr />
          <ExpCardTvn />
          <ExpCardRe />
          <ExpCardLotus />
        </section>
      </motion.div>
    </section> 
  </article>   
  )
}