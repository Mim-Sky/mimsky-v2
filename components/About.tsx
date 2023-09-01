import React from 'react'
import {motion} from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-3xl mx-auto justify-center items-center pd-10">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-xl text-grey">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{opacity: 1, x:0}}
        viewport={{ once: true }}
        src="/mimsky-portrait.png"
        alt='Portrait of Michal smiling on a green hill above small English town'
        className="brightness-90 mb-5 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
        md:rounded-md md:w-56 mt-10 md:h-56 lg:w-[250px] lg:h-[375px]"
        />
      <div className="px-7 mx-auto">
        <h4 className="text-2xl text-whiteText font-semibold mb-7">Here is a <span className="underline decoration-yellow/40">little</span> background</h4>
        <p className="text-whiteText text-base md:text-sm"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        </p>
      </div>
    </motion.div>
     

  )
}