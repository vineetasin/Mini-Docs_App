import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Hare Krishna Hare Krishna, Krishna Krishna hare hare, hare Raam here Raam, Raam Raam Hare Hare",
      filesize: ".4mb",
      close: true ,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    },

    {
      desc: "Lorem ipsum dolor sigsdiuho",
      filesize: ".4mb",
      close: true ,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "purple"}
    },  

    {
      desc: "Lorem ipsum dolor sigsdiuho",
      filesize: ".4mb",
      close: false ,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green"}
    },

    {
      desc: "Lorem ipsum dolor sigsdiuho",
      filesize: ".4mb",
      close: false ,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
    },

    {
      desc: "Lorem ipsum dolor sigsdiuho",
      filesize: ".4mb",
      close: true ,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "purple"}
    },

  ];

  return (
    <div ref={ref} className='fixed flex gap-10 top-0 p-4 flex-wrap left-0 z-[3] w-full h-full'>
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
     </div>
  )
}

export default Forground