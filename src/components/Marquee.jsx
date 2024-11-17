import React from 'react'
import { motion } from "framer-motion";


function Marquee({imagesurls, direction }) {
  return (
    // <div className='w-full flex iems-center gap-20 py-8 whitespace-nowrap overflow-hidden'>
    //     {imagesUrl.map(elem => <img src={elem} alt="" className='w-[6vw] flex-shrink-0'/> )}
    //     {imagesUrl.map(elem => <img src={elem} alt="" className='w-[6vw] flex-shrink-0'/> )}
    // </div>

    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee