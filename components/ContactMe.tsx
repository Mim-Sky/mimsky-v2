import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import ContactForm from "../components/ContactForm";

type Props = {};

function ContactMe({}: Props) {

  return (
    <div className="h-screen relative flex flex-col md:flex-row max-w-7xl text-center md:text-left px-10 mx-auto items-center justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-grey text-xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need. {" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
            <p className="text-2xl">Reykjavik, Iceland</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
