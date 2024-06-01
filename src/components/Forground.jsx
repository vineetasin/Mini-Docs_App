import React, { useRef, useState } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Anyone who has never made a mistake has never tried anything new.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "purple" },
    },

    {
      desc: "Choose a job you love, and you will never have to work a day in your life.",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },

    {
      desc: "Creativity is not a talent. It is a way of operating",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: "The beginning is the most important part of the work.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "purple" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed flex gap-10 top-0 p-4 flex-wrap left-0 z-[3] w-full h-full"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
