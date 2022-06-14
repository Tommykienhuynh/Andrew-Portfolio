import React from 'react'

import gradTower from "../../assets/gradTower.jpg";
import gradSevenSteet from "../../assets/gradSevenStreet.jpg";
import danielGrad from "../../assets/danielGrad.jpg";
import benchGrad from "../../assets/benchGrad.jpg";
import gradPop from "../../assets/gradPop.jpg";
import imgTwo from "../../assets/kevinGrad.jpg";
import mariaGrad from "../../assets/mariaGrad.jpg";




export default function Graduation() {
  return (
    <> 
        <div className="col1  col-spam-1 col-spam-2">
            <img className='mb-5' src={danielGrad} alt="grad photo" />
            <img className='mb-5' src={gradTower} alt="grad photo" />
        </div>
        <div className="col2  col-spam-2 col-spam-3" >
        <img className='mb-5' src={gradPop} alt="grad photo" />
            <img className='mb-5' src={benchGrad} alt="grad photo" />
            <img className='mb-5' src={imgTwo} alt="grad photo" />
        </div>
         <div className="col3  col-spam-3 col-spam-4" >
         <img className='mb-5' src={mariaGrad} alt="grad photo" />
         <img className='mb-5' src={gradSevenSteet} alt="grad photo" />
 
        </div>
  </>
  )
}
