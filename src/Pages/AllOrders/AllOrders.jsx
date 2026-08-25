import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './../../Context/User.Context';
import { jwtDecode } from "jwt-decode"
import Loading from './../../Components/Loading/Loading';
import { Helmet } from "react-helmet";

export default function AllOrders() {
  const { token } = useContext(userContext);
  const { id } = jwtDecode(token);
  console.log(id)
  const [orders, setOrders] = useState(null);

  async function getUserOrders() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      // console.log(data);
      setOrders(data)
    }
    catch (error) {
      console.log(error.response?.data);
    }
  }
  useEffect(() => {
    getUserOrders()
  }, [])

  return (
    <>
      <Helmet>
        <title>Orders</title>
        <meta name='description' content="welcom to home page " />
      </Helmet>
      {!orders ? (<Loading />) : (
        orders.map((order) => (
          <div className="order mt-4 border border-gray-400 rounded p-4" >

            <div className="flex items-center justify-between ">
              <div>
                <h2 className='text-gray-400 md:text-lg '>Order ID</h2>
                <h3 className='font-bold'>#{order.id}</h3>
              </div>
              <div>
                {order.isDelivered ?
                  (<span className="btn-primary bg-lime-500 inline-block me-2 font-cairo ">تم التوصيل</span>) :
                  (
                    <>
                      <span className="btn-primary bg-blue-500 inline-block me-2 font-cairo ">قيد التوصيل</span>

                      {order.isPaid ? (
                        <span className="btn-primary font-cairo bg-lime-500 inline-block me-2"> الدفع تم  </span>
                      ) : (
                        <span className="btn-primary font-cairo bg-red-500 inline-block me-2">غير مدفوع  </span>
                      )
                      }
                    </>
                  )
                }
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 mt-5">
              {order?.cartItems?.map((product) => (
                <div className='product border boredr-gray-300 rounded p-3 lg:col-span-2 md:col-span-3 col-span-6 ' key={product.id}>
                  <img src={product.product.imageCover} alt=""
                    className='w-full h-32 object-cover' />
                  <h3>Sportsware Club Graphic Hoodie Blue</h3>
                  <span>1254 L.E</span>
                </div>
              ))}

            </div>
          </div>
        ))

      )}
    </>
  )
}
