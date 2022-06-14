import React from 'react'

import jennyAoiDai from "../../assets/jennyAoiDai.jpg";
import jennyAoiDai2 from "../../assets/jennyAoiDai2.jpg";
import imgOne from "../../assets/snapBack.jpg";
import imgSeven from "../../assets/squatTree.jpg";
import fence from "../../assets/fence.jpg";


export default function Portraits() {
  return (
    <> 
        <div className="col1  col-spam-1 col-spam-2">
            <img className='mb-5' src={jennyAoiDai} alt="aoiDai1" />
            <img className='mb-5' src={fence} alt="fence" />
             
        </div>
        <div className="col2  col-spam-2 col-spam-3" >
            <img className='mb-5' src={imgOne} alt="Snapback" />
            <img className='mb-5' src={jennyAoiDai2} alt="AoiDai2" />
        </div>
         <div className="col3  col-spam-3 col-spam-4" >
         <img className='mb-5' src={imgSeven} alt="SquatTree" />
        </div>
  </>
  )
}
