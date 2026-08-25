import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';



// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';



export default function CategorySlider() {
  const [categories, setCategories] = useState(null)
  async function getCategories() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    }
    const { data } = await axios.request(options);
    // console.log(data);
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {categories ?
        <section className='pb-5 mb-10'>
          <h2 className='text-2xl font-medium pb-5 '>Shop Popular Categories</h2>
          <Swiper
            // install Swiper modules
            slidesPerView={1}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 2000, }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            style={{ height: "100%" }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category._id} >
                <Link to={`/category/${category._id}`}>
                  <img src={category.image} alt="" className='w-full h-72 object-cover' />
                  <h3 className='text-xl font-medium py-3'>{category.name}</h3>
                </Link>
              </SwiperSlide>

            ))}


          </Swiper>
        </section> : <Loading />
      }

    </>
  )
}
