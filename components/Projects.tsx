import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import Proj from '../components/Proj';
import Proj2 from '../components/Proj2';

type Props = {}

function Projects({}: Props) {
  const projects = [
    {id: 1, content: <Proj />}, 
    {id: 2, content: <Proj2 />}, 
  ];
  return (
  <div>
    <div className="flex flex-col justify-center mx-auto">
      <h3 className=" uppercase tracking-[15px] text-grey text-xl mx-auto">Projects</h3>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative flex flex-col text-left md:flex-row max-w-full justify-center mx-auto  z-0">
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-siteYellow/50">
            {projects.map((project) => (
              <div key={`project-${project.id}`}>{project.content}</div>
            ))}
      </div>
      <div className="w-full absolute top-[30%] bg-siteYellow/10 left-0 h-[400px] -skew-y-12" />
      </motion.div>
    </div>
  </div>
  );
}

export default Projects;
