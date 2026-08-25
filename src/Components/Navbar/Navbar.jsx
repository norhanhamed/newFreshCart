import React, { useContext, useEffect, useState, } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { userContext } from './../../Context/User.Context';
import { CartContext } from '../../Context/Cart.Context';

export default function Navbar() {
    const { token, logOut } = useContext(userContext);
    const [isOpen, setIsOpen] = useState(false);

    const { getCartInfo, cartInfo } = useContext(CartContext);
    useEffect(() => { getCartInfo() }, [])
    return (
        <>
            <nav className=' py-5 bg-slate-100 w-full myContainer '>
                <div className=" container flex items-center  ">

                    <div className={` ${isOpen ? "hidden" : "flex"} justify-between items-center w-full `} >{/* logo */}
                        <h1 > <a href="/" > <img src={logo} alt="" /> </a> </h1>
                    </div>
                    {/* menuebar */} <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-2xl" >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className={`${isOpen ? "flex " : "hidden"} lg:flex w-full gap-6 pt-0  items-center justify-center flex-col lg:flex-row `}>

                       {/* closeMenue */} <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden self-end text-2xl">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        {/* navigationLinks */}
                        {token ? (
                            <ul className='flex flex-col lg:flex-row md:gap-6 gap-4 lg:items-center items-start'>
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
                                <li>
                                    <NavLink to="/allorders" className={({ isActive }) => {
                                        return ` relative before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:bg-primary before:left-0 before:-bottom-1
                                        ${isActive ? "font-bold before:w-full" : " before:w-0 "} `;
                                    }} >Orders</NavLink>
                                </li>
                            </ul>
                        ) : ("")}

                        <Link to='/cart' className='md:ms-auto relative ' >
                            <i className="fa-solid fa-cart-shopping md:text-lg text-[40px]"></i>
                            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full md:text-sm text-[20px] font-bold text-white bg-primary md:w-5  w-6 md:h-5 h-6 flex justify-center items-center">
                                {cartInfo === null ? (<i className='fa-solid fa-spinner fa-spin'></i>) : (cartInfo.numOfCartItems || 0)}</span>
                        </Link>

                        {/* social Media Icons */}
                        <ul className='md:flex hidden md:justify-center justify-start gap-6 py-5 lg:py-0 ' >
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
                                    <span onClick={logOut} >
                                        <i className='fa-solid fa-right-from-bracket md:text-2xl text-4xl'></i>
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
