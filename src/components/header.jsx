import {React, useState} from "react";

import Carousel from "../components/carousel";
import Navbar from "./navbar";
import ProgressBar  from "./progressBar";


export default function Header() {

  let [panelProgress, setPanelProgress] = useState(0);


  return (
    < >

    <Navbar/>
    
        <div className=" grid grid-cols-7  ">

            
        
        <div className="heroBox  text-primaryWhite  col-start-1 col-end-4 flex flex-col justify-center items-start ">
            <h3 className="text-3xl font-bold mb-2 font-main"> Andrew Nguyen </h3>
            <p className="text-sm font-main text-left"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            </p>
            <div className="button bg-primaryRed rounded-md px-10 mt-10 py-1 font-bold text-primaryWhite cursor-pointer hover:opacity-50 ">
                Contact
            </div>
        </div>
      

      <div className="container   col-start-4 col-end-7    ">
      <Carousel panelProgress={panelProgress}  setPanelProgress={setPanelProgress} />
      </div>
        
     
        <div className=" col-start-7 col-end-8  w-full h-full flex flex-col  items-end ">
          <ProgressBar panelProgress={panelProgress} />
        </div>
      </div>
    </>
  )
}
