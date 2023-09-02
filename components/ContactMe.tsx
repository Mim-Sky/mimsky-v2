import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


type Props = {};
  


function ContactMe({}: Props) {

  const { register, 
          handleSubmit 
        } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

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
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
            <p className="text-2xl">+3547641321</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
            <p className="text-2xl">Reykjavik</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 hover:animate-pulse"/>
            <p className="text-2xl">egheitimichal@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register('name')} 
              placeholder="Name"
              className="contactInput" type="text"/>
            <input 
              {...register('email')} 
              placeholder="Email"
              className="contactInput" type="email"/>
          </div>
          <input 
            {...register('subject')} 
            placeholder="Subject"
            className="contactInput" type="text"/>
          <textarea 
            {...register('message')} 
            placeholder="Message"
            className="contactInput" />
          <button 
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-whiteText">Send!</button>
        </form>
        
      </div>

      
    </div>
  )
}

export default ContactMe