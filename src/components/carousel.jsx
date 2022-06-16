import {React, useEffect, useState} from "react";
import { motion, useAnimation } from "framer-motion";


import imgOne from "../assets/snapBack.webp";
import imgTwo from "../assets/kevinGrad.jpg";
import imgThree from "../assets/jennyLamp2.jpg";
import imgFour from "../assets/nicoleAoiDai.jpg";
import imgFive from "../assets/weddingStanding2.jpg";
import imgSix from "../assets/jennyNicole.jpg";
import imgSeven from "../assets/squatTree.jpg";


// EACH PANEL WILL HAVE TO MAP THROUGH SLIDERDATA
//ALTHOUGH EACH PANEL WILL START AT A DIFFERENT INDEX

export default function Carousel({panelProgress, setPanelProgress }) {


  
  const sliderData = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven]
  const controls = useAnimation();

  useEffect(() => {
  

    function setNextPanels(panelProgress){
      setPanelProgress(panelProgress);
      }


    
    const oneNext = (panelProgress + 1) % sliderData.length;
 
  
    
    const id = setTimeout(() => (setNextPanels(oneNext)), 3000); 
    
    return () => clearTimeout(id);
    
  }, [panelProgress]);

 
  controls.start("pOne");
  controls.start("pTwo");
  controls.start("pThree");
  controls.start("pFour");

  const variantOne = {
    pOne: { x: [0, -210],
      transition:  { delay: 0, duration: 2,   }
    },
 
  }
  const variantTwo = {
    pTwo: {x: [0, -172],
      transition:  { delay: 0, duration: 2  }
    },
  
  }
  const variantThree = {
    pThree: {x: [0, -122],
      transition:  { delay: 0, duration: 2  }
    },
 
  }
  const variantFour = {
    pFour: {x: [0, -80],
      transition:  { delay: 0, duration: 2  }
    },
    
  }

  
  

  return (



    <div className="flex flex-row carousel justify-end  items-center 
     h-96 ">

        <div className="panel  panel-1  bg-primaryRedshadow-lg  flex flex-row ">
       
  <motion.img  animate={controls} variants={variantOne}    className="h-full w-full" src={sliderData[panelProgress]} alt="imgone" /> 
  <motion.img  animate={controls} variants={variantOne}     className="h-full w-full" src={sliderData[(panelProgress + 1) % sliderData.length]} alt="imgone" /> 
        </div>
        <div className="panel panel-2   shadow-lg flex flex-row ">
       
  <motion.img animate={controls} variants={variantTwo}  className="h-full w-full" src={sliderData[(panelProgress + 1) % sliderData.length]}  alt="imgone" /> 
     <motion.img  animate={controls} variants={variantTwo} className="h-full w-full" src={sliderData[(panelProgress + 2) % sliderData.length]} alt="imgone" />  
        </div>
        <div className="panel panel-3    shadow-lg  flex flex-row">
       
          <motion.img animate={controls} variants={variantThree} className="h-full w-full "src={sliderData[(panelProgress + 2) % sliderData.length]}  alt="imgone" /> 
          <motion.img  animate={controls} variants={variantThree} className="h-full w-full" src={sliderData[(panelProgress + 3) % sliderData.length]} alt="imgone" /> 
        </div>
        <div className=" panel panel-4  shadow-lg flex flex-row ">
       
    <motion.img animate={controls} variants={variantFour}  className="h-full w-full" src={sliderData[(panelProgress + 3) % sliderData.length]}  alt="imgone" /> 
    <motion.img  animate={controls} variants={variantFour}  className="h-full w-full" src={sliderData[(panelProgress + 4) % sliderData.length]} alt="imgone" /> 
        </div>


    </div> 
  )
}
