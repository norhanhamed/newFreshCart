import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from './../../Context/Cart.Context';
import axios from 'axios';
import { userContext } from '../../Context/User.Context';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

    const { cartInfo, setCartInfo } = useContext(CartContext);
    const { token } = useContext(userContext)
    const [orederType, SetOrderType] = useState(null);
    const navigate = useNavigate()
    //createChashOrder
    async function createChashOrder(values) {
        console.log("########CashOrder");

        const options = {
            url: `https://ecommerce.routemisr.com/api/v2/orders/${cartInfo.data._id}`,
            method: "POST",
            headers: {
                token,
                "Content-Type": "application/json",
            },
            data: { values }
        };

        let { data } = await axios.request(options);
        console.log(data);
        setCartInfo([]);
        toast.success("Orders have been created successfully");
        setTimeout(() => {
            navigate("/allorders")
        }, 2000)


    }

    //createOnlineOreder
    async function createOnlineOreder(values) {
        console.log("########OnlineOrder");
        const options = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.data._id}?url=http://localhost:5173`,
            method: "POST",
            headers: {
                token,
                "Content-Type": "application/json",
            },
            data: { values }
        };

        let { data } = await axios.request(options);
        console.log(data);

        toast.loading("Redirect to payment getway ");

        setTimeout(() => {
            if (data.status === "success") {
                window.location.href = data.session.url
            }
        }, 3000);


    }

   

    //Formik
    let formik = useFormik({
        initialValues: {
            "shippingAddress": {
                "details": "",
                "phone": "",
                "city": "",
            }
        },
       
        onSubmit: (values) => {
            if (orederType === "cash") { createChashOrder(values) }
            else { createOnlineOreder(values) }
        }
    })


    return (
        <>
            <h2 className="text2xl font-bold mb-5">Sipping Address</h2>
            <form onSubmit={formik.handleSubmit}>
                <input type="text"
                    className='form-control w-full mb-3'
                    placeholder='City'
                    name='shippingAddress.city'
                    value={formik.values.shippingAddress.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="tel"
                    className='form-control w-full mb-3'
                    placeholder='Phone'
                    name='shippingAddress.Phone'
                    value={formik.values.shippingAddress.Phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <textarea
                    className='form-control w-full mb-3'
                    placeholder='details'
                    name='shippingAddress.details'
                    value={formik.values.shippingAddress.details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></textarea>
                <button type='submit' onClick={() => { SetOrderType("cash") }}
                    className="btn-primary cursor-pointer bg-blue-500 mr-4 uppercase ">Cash Order
                </button>
                <button type='submit'
                    onClick={() => { SetOrderType("online") }}
                    className="btn-primary cursor-pointer uppercase ">Online Order
                </button>
            </form>

        </>
    )
}
