import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="h-screen max-w-4xl mx-auto">

{/* className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-3xl mx-auto justify-center items-center pd-10"> */}
      <div className='py-14'>
        <h3 className=" flex justify-center items-center uppercase tracking-[15px] text-xl text-grey">
          About
        </h3>
      </div>
      <div className='flex flex-col md:flex-row items-center md:space-x-5 space-y-5 '>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{opacity: 1, x:0}}
        viewport={{ once: true }}
        className="flex-shrink-0"
        >
        <Image   
        src="/mimsky-portrait.png"
        width={500}
        height={500}
        alt='Portrait of Michal smiling on a green hill above small English town'
        className="brightness-90 w-36 h-36 md:w-56 md:h-56 md:ml-7 rounded-full object-cover 
        md:rounded-md lg:w-[250px] lg:h-[375px]"
        />
        </motion.div>
      <div className="px-10 mx-auto flex flex-col items-center md:items-start space-y-5">
        <h4 className="text-2xl md:text-4xl text-whiteText font-semibold">Here is a <span className="underline decoration-yellow/40">little</span> background</h4>
        <p className="text-whiteText text-base md:text-sm"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        </p>
        </div>
      </div>
    </div>
     

  )
}