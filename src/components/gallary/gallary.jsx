import {React, useState} from 'react'
import PicContainer from './picContainer';

export default function Gallery() {
  let [imgType, setImgType] = useState("All");


  return (
    <section className="mt-14   flex flex-col  m-16 ">
        <ul className='text-primaryWhite self-center w-1/3 flex flex-row justify-around font-semibold cursor-pointer '>
          <li className={imgType === "All"? "text-primaryRed underline underline-offset-4" : " "}
              onClick={(e) => setImgType("All")}
          >     All </li>
          <li className={imgType === "Portraits"? "text-primaryRed underline underline-offset-4" : " "}
              onClick={(e) => setImgType("Portraits")}
          >     Portraits </li>
          <li className={imgType === "Graduation"? "text-primaryRed underline underline-offset-4" : " "}
              onClick={(e) => setImgType("Graduation")}
          >  
                Graduation</li>
          <li className={imgType === "Travel"? "text-primaryRed underline underline-offset-4" : " "}
              onClick={(e) => setImgType("Travel")}
          >    Travel </li>
        </ul>
        <PicContainer imgType={imgType} />
       
    </section>
  )
}
