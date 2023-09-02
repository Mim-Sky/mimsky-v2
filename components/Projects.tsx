import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-grey text-xl">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20
       scrollbar-thumb-siteYellow/50">
       {projects.map((project, i) => ( 
        <div key={`project-${i}`} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.div
            initial={{
              y: -400,
              opacity: 0
            }} 
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <Image src="/sample.jpg" alt="project screened on different devices" width={360} height={360}></Image>
          </motion.div>
          <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-siteYellow/50">
              Project {i + 1} of {projects.length}:</span> {" "} GoWork Blog
             </h4>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. </p>
          </div>
        </div>
       )
       )}
      </div>
      <div className="w-full absolute top-[30%] bg-siteYellow/10 left-0 h-[400px] -skew-y-12"/>
    </motion.div>
    )
}
export default Projects;
