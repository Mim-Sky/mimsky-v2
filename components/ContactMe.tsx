import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import ContactForm from "../components/ContactForm";

type Props = {};

function ContactMe({}: Props) {

  return (
  <div className="h-screen max-w-7xl mx-auto">   
    <div className="flex flex-col justify-center items-center gap-16">
      <h3 className="mt-24 uppercase tracking-[15px] text-grey text-xl">Contact</h3>
      <div className=" text-center md:text-left px-10 items-center justify-evenly">
        <div className="flex flex-col space-y-10">
          <h4 className="text-2xl font-semibold text-center">
            I have just what you need. {" "}
            <span className="text-[#F7AB0A]/50">Lets Talk.</span>
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
              <p className="text-xl">Reykjavik, Iceland</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
              <p className="text-xl">+354 7641321</p>
            </div>
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  </div> 
  )
}

export default ContactMe
