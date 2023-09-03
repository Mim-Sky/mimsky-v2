import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
  <div className="h-screen max-w-4xl mx-auto">
    <div className="flex flex-col justify-center items-center gap-16">
      <h3 className="mt-24 uppercase tracking-[15px] text-grey text-xl mx-auto">About</h3>  
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex mx-auto">
        <div className='flex flex-col md:flex-row items-center md: gap-x-10'>
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
          <div className="mx-auto flex flex-col items-center md:items-start gap-y-5 px-10 md:px-0">
            <h4 className="text-2xl md:text-4xl text-whiteText font-semibold">Here is a <span className="underline decoration-yellow/40">little</span> background</h4>
            <p className="text-whiteText text-base md:text-lg"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>      
  
     

  )
}