import React from 'react'
import { star } from '../assets/icons'

function ReviewCard({imgURL, customerName, feedback, rating}) {
  return (
    <div className='flex flex-1 flex-col justify-center items-center'>
        <img src={imgURL} alt="customer" className='rounded-full w-[120px] h-[120px] object-cover'/>
        <p className='mt-6 info-text max-w-sm text-center'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img className="object-contain m-0" src={star} alt="rating"  width={24} height={24}/>
            <p className='text-slate-gray text-xl font-montserrat'>({rating})</p>
        </div>
        <h3 className='mt-2 font-palanquin text-3xl text-center font-bold '>{customerName}</h3>
    </div>
  )
}

export default ReviewCard