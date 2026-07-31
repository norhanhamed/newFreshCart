import React from 'react'
import amazonLogo from "../../assets/images/amazon-pay.png";
import americanExpressLogo from "../../assets/images/American-Express-Color.png";
import masterCardLogo from "../../assets/images/mastercard.webp";
import payPalLogo from "../../assets/images/paypal.png";
import googlePlay from "../../assets/images/get-google-play.png";
import AppStore from "../../assets/images/get-apple-store.png"
export default function Footer() {
  return (
    <>
      <footer className='bg-slate-100 py-4 absolute right-0 left-0 bottom-0 myContainer '>
        <div className="container">
          <h2 className='text-2xl font-semibold'>Get the FreshCart App</h2>
          <p className="my-3">We will send you a link, open it on your phone to download the app</p>

          <div className='flex lg:flex-row flex-col gap-4 '>
            <input type="text" className="form-control lg:flex-grow" placeholder='Email...' />
            <button className='btn-primary capitalize '>Share app link</button>
          </div>

          <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 justify-between  lg:items-center items-start mt-4">

            <div className="flex gap-2 items-center">
              <span className='lg:text-[18px] text-[14px] font-medium'>Payment Parents</span>
              <div className="flex gap-2 items-center">
                <img src={amazonLogo} alt="" className="lg:w-16 w-14" />
                <img src={americanExpressLogo} alt="" className="lg:w-16 w-14" />
                <img src={masterCardLogo} alt="" className="lg:w-16 w-14" />
                <img src={payPalLogo} alt="" className="lg:w-16 w-14" />
              </div>
            </div>

            <div className="flex lg:gap-2 gap-15 items-center">
              <span className='lg:text-[18px] text-[14px] font-medium'>Get deliveries with FreshCart </span>
              <div className="flex gap-2 items-center">
                <img src={googlePlay} alt="" className="lg:w-16 w-14" />
                <img src={AppStore} alt="" className="lg:w-16 w-14" />
              </div>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}
