import {React} from 'react';

import AllGallary from './allGallary';
import Portraits from './portraits';
import Graduation from './graduation';

export default function PicContainer({imgType}) {

   

  return (
    <div className='bg-bannerBlack mt-20 h-full grid w-full  grid-cols-3 gap-x-8'>
        {imgType === "All" ? <AllGallary /> : " " }
        {imgType === "Portraits" ? <Portraits /> : " " }
        {imgType === "Graduation" ? <Graduation /> : " " }
        
    </div>
  )
}
