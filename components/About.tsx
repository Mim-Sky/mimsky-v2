import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative md:text-left md:flex-row h-screen max-w-4xl px-10 justify-evenly mx-auto items-center" >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-xl text-grey">About</h3>
    </div>
  )
}