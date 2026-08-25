import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './../../Components/Loading/Loading';
import { CartContext } from '../../Context/Cart.Context';

export default function Cart() {
  // const for getCartInfo fun from cartContext
  const { getCartInfo, cartInfo, updateCartItem, removeCart } = useContext(CartContext);
  useEffect(() => { getCartInfo() }, []);

  // const for deleteCartItem fun from cartContext
  const { deleteCartItem } = useContext(CartContext)

  return (
    <>
      {cartInfo === null ? (
        <Loading />) : (
        <section className='bg-slate-100 p-5'>
          <h2 className='text-2xl font-bold mb-5 '>
            <span>Shop Cart</span>
            <i className="fa-solid fa-cart-shopping ml-2"></i>
          </h2>

          {cartInfo.numOfCartItems === 0 ? (
            <div className='py-16 flex flex-col justify-center items-center'>
              <h3 className='text-lg'>there are not items yet.</h3>
              <Link to='/' className='btn-primary text-sm mt-2'> ADD YOUR FIRST PRODUCT TO CART</Link>
            </div>
          ) : (
            cartInfo.data.products.map((product) => (
              <div key={product._id} className="prouduct flex md:flex-row flex-col md:gap-10 gap-2 items-center justify-between mt-4 md:mb-0 mb-10  ">

                <div className=" grid grid-cols-12 md:gap-10 gap-6"> {/* cart-img && cart-data */}

                  <div className="md:col-span-2 col-span-4  ">{/* cart-img */}
                    <img src={product.product.imageCover} alt="imageCover" className="w-full" />
                  </div>

                  <div className='md:col-span-10 col-span-8 '> {/* cart-data */}
                    <h3 className='text-lg font-semibold line-clamp-1 md:line-clamp-2'>{product.product.title}</h3>
                    <h4 className="text-primary">price: {product.price} L.E</h4>
                    <button onClick={() => { deleteCartItem({ productId: product.product.id }) }}
                      className=" cursor-pointer btn-primary text-sm mt-3 bg-red-500 ">
                      <i className="fa-solid fa-trash-can mr-2"></i> Remove
                    </button>
                  </div>

                </div>

                <div className="flex gap-4 items-center ms-auto ">{/* plus& minus buttons */}
                  <button onClick={() => { updateCartItem({ id: product.product.id, count: product.count - 1 }) }}
                    className='btn-primary cursor-pointer'>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="text-lg font-bold">{product.count}</span>
                  <button onClick={() => { updateCartItem({ id: product.product.id, count: product.count + 1 }) }}
                    className='btn-primary cursor-pointer'>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>


              </div>
            ))
          )}

          {cartInfo.numOfCartItems === 0 ? ("") : (<button onClick={() => { removeCart() }}
            className="btn-primary bg-red-500 ms-auto block cursor-pointer">Clear Cart</button>
          )}
        </section>
      )}
      <Link to="/chekout" className='btn-primary uppercase ms-auto block mt-3 w-fit' >next step</Link>

    </>
  )
}
