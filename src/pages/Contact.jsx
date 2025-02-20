/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>

      <div className='text-2xl font-semibold mt-8 mb-6'>
        <Title className='sm:justify-center  justify-start' text1={"CONTACT"} text2={"US"} />
      </div>
       <div className=' flex justify-center items-start  flex-col sm:flex-row gap-6 sm:gap-7 '>
        <img className='w-[380px]' src={assets.contact_img} alt="contact-image" />
         
         <div  className='flex flex-col gap-4'>
          <p className='text-xl  text-gray-700 font-semibold'>Our Store</p>
          <p className='text-gray-500'>Mukarram Town 4532 <br /> chur chowk, Rawalpindi Pakistan</p>
          <p className='text-gray-500'>Telephone: +923125459117 <br />Email: abidjohar786@gamil.com</p>
          <p className='text-xl font-semibold text-gray-700'>Career at Forever</p>
          <p className='text-gray-500'>Learn more about our team and jobs opening</p>
          <button className='w-28 px-4 py-2 border mt-5 border-black hover:bg-black hover:text-white'>Explore Us</button>
         </div>


       </div>



    </div>
  )
}

export default Contact
