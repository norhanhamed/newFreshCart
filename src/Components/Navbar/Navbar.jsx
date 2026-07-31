import React, { useState } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className='px-10 py-5 bg-slate-100 lg:h-auto w-full h-screen lg:p-3  '>
                <div className=" container myContainer flex lg:items-center items-end flex-wrap  lg:flex-nowrap ">

                    <div className="flex justify-between items-center w-full">
                        <h1> <a href="/"> <img src={logo} alt="" /> </a> </h1>

                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl lg:hidden " >
                            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`} ></i>
                        </button>

                    </div>

                    <div className={`w-full lg:w-auto ${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-10 pt-10 lg:pt-0 lg:items-center items-start`}>

                        <ul className='flex flex-col lg:flex-row lg:gap-6 gap-8 lg:items-center items-start'>
                            <li>
                                <a href="/" className='lg:text-xl text-2xl font-bold'>Home</a>
                            </li>
                            <li>
                                <a href="/" className='lg:text-xl text-2xl font-bold' >Products</a>
                            </li>
                            <li>
                                <a href="/" className='lg:text-xl text-2xl font-bold' >Categories</a>
                            </li>
                            <li>
                                <a href="/" className='lg:text-xl text-2xl font-bold' >Brands</a>
                            </li>
                        </ul>

                        <ul className='flex lg:justify-center justify-start gap-6  lg:ms-auto py-5 lg:py-0' >
                            <li>
                                <a href="https://www.facebook.com">
                                    <i className='fa-brands fa-facebook lg:text-xl text-2xl ' ></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com">
                                    <i className='fa-brands fa-twitter lg:text-xl text-2xl '></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com">
                                    <i className='fa-brands fa-tiktok lg:text-xl text-2xl '></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com">
                                    <i className='fa-brands fa-youtube lg:text-xl text-2xl '></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <i className='fa-brands fa-instagram lg:text-xl text-2xl '></i>
                                </a>
                            </li>
                        </ul>

                        <ul className='flex lg:justify-center justify-start lg:gap-6 gap-10  items-center'>
                            <li>
                                <a href="/login" className='text-[17px] '>Login</a>
                            </li>
                            <li>
                                <a href="/signup" className='text-[17px] '>SignUp</a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className='fa-solid fa-right-from-bracket text-2xl'></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}
