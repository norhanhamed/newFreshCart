import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Cart.Context';
export default function ProductCard({ productInfo }) {
  const { title, price, category, ratingsAverage, images ,id} = productInfo;
  const { addProductToCart } = useContext(CartContext);
  return (
    <>
      <div className='col-span-12  md:col-span-4 lg-col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden '>

        <div className="relative">

          <img src={images[0]} alt="" className="w-full" />

          <div className="layer  opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-2 absolute w-full h-full left-0 top-0 bg-black/15 ">

            <div className="icon w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div onClick={()=>{addProductToCart({id})}} className="icon cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-cart-shopping"></i>{""}
            </div>
            <Link to={`/product/${id}`} className="icon w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
              <i className="fa-solid fa-eye"></i>{""}
            </Link>

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
