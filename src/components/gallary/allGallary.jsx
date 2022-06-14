import React from 'react'

import gradTower from "../../assets/gradTower.jpg";
import gradSevenSteet from "../../assets/gradSevenStreet.jpg";
import danielGrad from "../../assets/danielGrad.jpg";
import weddingKiss from "../../assets/weddingKiss.jpg";
import benchGrad from "../../assets/benchGrad.jpg";
import fence from "../../assets/fence.jpg";
import gradPop from "../../assets/gradPop.jpg";
import jennyAoiDai from "../../assets/jennyAoiDai.jpg";
import jennyAoiDai2 from "../../assets/jennyAoiDai2.jpg";
import jennyTable from "../../assets/jennyTable.jpg";
import mariaGrad from "../../assets/mariaGrad.jpg";
import pumpkin from "../../assets/pumpkin.jpg";
import weddingStanding1 from "../../assets/weddingStanding.jpg";


 


export default function allGallary() {
  return (
 <> 
   <div className="col1  col-spam-1 col-spam-2">
            <img className='mb-5' src={gradTower} alt="gradTower" />  
            <img className='mb-5' src={benchGrad}  alt="benchGrad" />
            <img className='mb-5' src={gradPop} alt="graduation celebration" />
            <img className='mb-5' src={fence}  alt="fence" />
            <img className='mb-5' src={jennyAoiDai2} alt="aoi dai pic 2" />
            
        </div>
        <div className="col2  col-spam-2 col-spam-3" >
            <img className='mb-5' src={gradSevenSteet} alt="sevenStreetGrad" />
            <img className='mb-5' src={jennyAoiDai} alt="aoi dai" />
            <img className='mb-5' src={pumpkin} alt="sitting on pumpkin" />
            <img className='mb-5' src={weddingStanding1} alt="wedding couples" />
        </div>
        <div className="col3  col-spam-3 col-spam-4" >
            <img className='mb-5' src={weddingKiss} alt="kissWedding" />
            <img className='mb-5' src={danielGrad} alt="danielGrad"  />
            <img className='mb-5' src={mariaGrad} alt="graduation photo" />
            <img className='mb-5' src={jennyTable} alt="table picture" />
    </div>
 </>
  )
}
