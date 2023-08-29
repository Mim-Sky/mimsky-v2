import React from "react";
import { SocialIcon } from 'react-social-icons';


type Props = {};

export default function Header({}: Props) {
  return (
    // sticky top-0? in header //

  <header className="flex p-5 justify-between max-w-7xl mx-auto z-50 xl:items-center"> 
    <div className="flex flex-row items-center">
    {/* Social icons */} 
    <SocialIcon url="https://linkedin.com" 
    fgColor="gray" 
    bgColor="transparent" 
    />
    <SocialIcon url="https://github.com" 
    fgColor="gray" 
    bgColor="transparent" 
    />
    <SocialIcon url="https://youtube.com" 
    fgColor="gray" 
    bgColor="transparent" 
    />
    </div>
    <div className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="upperCase hidden md:inline-flex text-gray-400 ">
        Get In Touch
      </p>
    </div>

  </header>
  );
}
