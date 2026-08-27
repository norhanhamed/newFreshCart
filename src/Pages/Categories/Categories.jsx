import React from 'react'

import comics1 from '../../assets/images/comics1.jpg'

export default function categories() {
    return (
        <>
            <div className="flex flex-col items-center gap-5 pt-10">
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl '>مش عارف اجيبهالك ازاي بس لسا معملناش كاتوجوريز</h2>
                <img src={comics1} alt="" className="w-[300px] md:w-[500px] h-[200px] " />
            </div>

        </>
    )
}
