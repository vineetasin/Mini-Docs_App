import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 w-48 h-60 rounded-[35px] px-5 py-4 text-zinc-200/80 overflow-hidden bg-zinc-900/80"
    >
      <FaRegFileAlt />
      <p className="text-[15px] leading-5 font-medium mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex item-center justify-between px-4 mb-3">
          <h5 className="text-[12px]">{data.filesize}</h5>
          <span className="w-3 h-3 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size=".5em" color="black" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-1 ${
              data.tag.tagColor === "purple" ? "bg-purple-600" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h1 className="text-[13px] font-semibold pb-1 mt-[4px]">
              {data.tag.tagTitle}
            </h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
