import React from 'react'


// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"


export default function HomeSlider() {
    return (
        <section className='mb-10 grid grid-cols-12'>

            <div className='col-span-8'>
                <Swiper
                    // install Swiper modules
                    slidesPerView={1}
                    loop
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                    }}

                    style={{ height: "100%" }}
                >
                    <SwiperSlide style={{ height: "100%" }} >
                        <img src={img1} alt="" className='w-full h-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "100%" }} >
                        <img src={img2} alt="" className='w-full h-full  object-cover' />
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "100%" }} >
                        <img src={img3} alt="" className='w-full h-full  object-cover' />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='col-span-4' style={{ height: "100%" }} >
                <div className='h-1/2'>
                    <img src={img2} alt="" className='h-full w-full' />
                </div>

                <div className='h-1/2' >
                    <img src={img3} alt="" className='h-full w-full' />
                </div>

            </div>
        </section>

    )
}
