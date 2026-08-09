import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { userContext } from '../../Context/User.Context'
export default function Login() {

  //use usercontext 
  const { token, setToken } = useContext(userContext)
  console.log(token)

  //validation
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("email isnot valid"),
    password: Yup.string().required("password is required").matches(/^[A-Z][0-9a-zA-Z]{5,25}$/, "pass must start with capital then .. contain nums or samll chars then..any thing from (5 : 25)"),
  })

  //err in resign up with the same email
  const [errMessage, setErrMsg] = useState(null)

  //navigate to login
  const navigate = useNavigate()
  //api function
  async function sendDataToLogin(values) {
    let id;
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values
      };
      //data wating toast
      id = toast.loading("Watting...")

      const { data } = await axios.request(options)
      // console.log(data)

      //dismiss wating toast
      toast.dismiss(id)
      //Successfully toast
      toast.success("User LoggedIn Successfully")

      // nav to login when sign up success
      setTimeout(() => {
        if (data.message === "success") {
          localStorage.setItem("token", data.token);
          setToken(data.token)
          navigate("/")
        }

      }, 3000);

    } catch (error) {
      //dismiss wating toast
      toast.dismiss(id);
      toast.error(error.response.data.message)
      console.log(error)
      setErrMsg(error.response.data.message)
    }
  }

  //formik
  let formik = useFormik({
    initialValues: {
      "email": "",
      "password": ""
    },
    validationSchema,
    onSubmit: sendDataToLogin
  })

  // console.log(formik)

  return (
    <>
      <section>
        <h2 className="text-2xl text-primary font-bold mb-6">
          <i className="fa-regular fa-circle-user me-3"></i>
          <span>Login Now</span>
        </h2>
        <form onSubmit={formik.handleSubmit} className='space-y-3'>
          <div>
            <input type="email"
              className='form-control w-full'
              placeholder='Email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email ? (
              <div className='text-red-600 font-semibold mt-2'> *{formik.errors.email} </div>
            ) : ("")
            }

            {errMessage ? (
              <div className='text-red-600 font-semibold mt-2'> *{errMessage} </div>
            ) : ("")
            }

          </div>

          <div>
            <input type="password"
              className='form-control w-full'
              placeholder='Password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.password && formik.touched.password ? (
              <div className='text-red-600 font-semibold mt-2'> *{formik.errors.password} </div>
            ) : ("")
            }

            {errMessage ? (
              <div className='text-red-600 font-semibold mt-2'> *{errMessage} </div>
            ) : ("")
            }

          </div>

          <button className='btn-primary' type='submit'>Login In</button>
        </form>
      </section>
    </>
  )
}
