import {React, useState, useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";


export default function ProgressBar({panelProgress}) {
  
  let [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {

      setProgressHeight((panelProgress + 1) * 54.85);
     // console.log(progressHeight);

  } ,[panelProgress])

  return (
    <div className="progressBar flex flex-col-reverse justify-between   overflow-hidden mr-10  w-1 h-full rounded-md bg-primaryWhite">
          <motion.div initial={{height: 0}} animate={{height: progressHeight}} transition={{duriation:1, delay: 0}} className="bg-primaryRed transition  rounded-md  w-1 " ></motion.div>
      {/*     <div className="progressCircle  rounded-xl w-3 h-3 self-center primaryBlack border-2  bg-primaryWhite"></div>
          <div className="progressCircle   rounded-xl w-3 h-3 self-center  -primaryBlack border-2   bg-primaryWhite"></div>
          <div className="progressCircle   rounded-xl w-3 h-3 self-center  -primaryBlack border-2   bg-primaryWhite"></div>
          <div className="progressCircle   rounded-xl w-3 h-3 self-center  -primaryBlack border-2   bg-primaryWhite"></div>
          <div className="progressCircle   rounded-xl w-3 h-3 self-center  -primaryBlack border-2   bg-primaryWhite"></div>
          <div className="progressCircle  rounded-xl w-3 h-3  self-center primaryBlack border-2  bg-primaryWhite"></div>
          <div className="progressCircle  rounded-xl w-3 h-3  self-center primaryBlack border-2  bg-primaryWhite"></div>
          <div className="progressCircle  rounded-xl w-3 h-3 self-center primaryBlack border-2  bg-primaryWhite"></div> */}
            
              </div>
  )
}


// Come