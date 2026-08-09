import React from 'react'

export default function ProductCard({ productInfo }) {
  const { title, price, category, ratingsAverage, images } = productInfo;
  return (
    <>
      <div className='col-span-12 sm-col-span-6 md:col-span-4 lg-col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden '>

        <div className="relative">

          <img src={images[0]} alt="" className="w-full" />

          <div className="layer opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-2 absolute w-full h-full left-0 top-0 bg-black/15 ">

            <div className="icon w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="icon w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-cart-shopping"></i>{""}
            </div>
            <div className="icon w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-eye"></i>{""}
            </div>

          </div>

        </div>

        <div className="p-3">

          <h3 className="text-primary">{category.name}</h3>
          <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
          <div className="flex items-center justify-between mt-4">
            <span>{price}</span>
            <i className="fa-solid fa-start text-yellow-500"></i>
            <span>{ratingsAverage}</span>
          </div>

        </div>

      </div>


    </>
  )
}
