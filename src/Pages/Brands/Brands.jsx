import React from 'react'

import comics2 from '../../assets/images/comics2.jpg'

export default function Brands() {
    return (
        <>
            <div className="flex flex-col items-center gap-5 pt-10">
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl'>معندناش برندات لسا </h2>
                <img src={comics2} alt="" className="w-[300px] md:w-[500px] h-[200px]" />
            </div>

        </>
    )
}
