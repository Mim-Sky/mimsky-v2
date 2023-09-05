import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
  <div className="h-screen max-w-4xl mx-auto">
    <article className="flex flex-col justify-center items-center gap-3 md:gap-16">
      <h3 className="mt-16 uppercase tracking-[15px] text-grey text-base md:text-xl mx-auto">
        About
      </h3>  
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex mx-auto">
        <section className='flex flex-col md:flex-row items-center md:gap-x-10'>
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
          <section className="mx-auto flex flex-col items-center md:items-start gap-y-5 px-10 md:px-0 " >
            <h4 className="text-xl md:text-2xl text-whiteText font-semibold">Here is a <span className="text-siteYellow/40">little</span> background</h4>
            <p className="text-whiteText "> I believe in change, adaptation and search for new solutions, because our world is in constant move. My interest in IT, will to learn and determination helped me to make a decision to move forward and learn web and software development. While still learning I feel confident and sure, that the skills I`have already aqquired are sufficient to make a great, clean, client and business scoped web apps. My vast experience in customer service, both in IT and tourism section on Iceland, is an important addition to my professional and personal character.
            In 2016 I moved to Iceland which became my home. I make use of it`s incredible enviroment and opportunities. I am a rock and ice climber (with glacier guiding certificate), hiker and a cyclist. I actively take part in volounteer work (like `Hreinni Hornstrandir`).
            </p>
          </section>
        </section>
      </motion.div>
    </article>
  </div>      
  
     

  )
}