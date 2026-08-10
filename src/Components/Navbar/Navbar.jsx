import React, { useContext, useState } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'
import { userContext } from './../../Context/User.Context';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { token,logOut } = useContext(userContext);

    return (
        <>
            <nav className=' py-5 bg-slate-100 lg:h-auto w-full h-screen lg:p-3 myContainer fixed left-0 top-0 right-0 z-50'>
                <div className=" container  flex lg:items-center items-end flex-wrap  lg:flex-nowrap  ">

                    <div className="flex justify-between items-center w-full">
                        <h1> <a href="/" > <img src={logo} alt="" /> </a> </h1>

                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl lg:hidden " >
                            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`} ></i>
                        </button>

                    </div>

                    <div className={`w-full lg:w-auto ${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-10 pt-10 lg:pt-0 lg:items-center items-start`}>
                        {/* navLinks */}
                        {token ? (
                            <ul className='flex flex-col lg:flex-row lg:gap-6 gap-8 lg:items-center items-start'>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => {
                                        return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                    }}
                                    >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" className={({ isActive }) => {
                                        return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                    }} >Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categories" className={({ isActive }) => {
                                        return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                    }} >Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/brands" className={({ isActive }) => {
                                        return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                    }} >Brands</NavLink>
                                </li>
                            </ul>
                        ) : ("")}

                        {/* social Media Icons */}
                        <ul className='flex lg:justify-center justify-start gap-6  lg:ms-auto py-5 lg:py-0' >
                            <li>
                                <NavLink to="https://www.facebook.com">
                                    <i className='fa-brands fa-facebook lg:text-xl text-2xl ' ></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.twitter.com">
                                    <i className='fa-brands fa-twitter lg:text-xl text-2xl '></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.tiktok.com">
                                    <i className='fa-brands fa-tiktok lg:text-xl text-2xl '></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.youtube.com">
                                    <i className='fa-brands fa-youtube lg:text-xl text-2xl '></i>
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <i className='fa-brands fa-instagram lg:text-xl text-2xl '></i>
                                </a>
                            </li>
                        </ul>
                        {/* Authentication  */}
                        <ul className='flex lg:justify-center justify-start lg:gap-6 gap-10  items-center'>
                            {!token ? (
                                <>

                                    <li>
                                        <NavLink to="/auth/login" className={({ isActive }) => {
                                            return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                        }}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/auth/signup" className={({ isActive }) => {
                                            return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                        }} >SignUp</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li className='cursor-pointer '>
                                    <span onClick={logOut}>
                                        <i className='fa-solid fa-right-from-bracket text-2xl'></i>
                                    </span>
                                </li>
                            )}


                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}
