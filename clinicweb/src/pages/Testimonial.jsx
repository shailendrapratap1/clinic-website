import React from 'react'
import { Card } from '../components'

const Testimonial = () => {
  return (
    <section id='testimonial' className='md:h-150 min-h-screen-1/2 mx-auto left-0 right-0 bg-linear-to-r from-gray-200 to-purple-200'>
     <div className='grid grid-cols-1 grid-rows-1 pt-35 pl-20'>
        <div className='flex flex-col text-4xl font-bold'>
      <h2 className=' '>What <span className='text-blue-500'>our member's </span></h2>
      <h2>Saying about us</h2>
      <p className='pt-5 text-xl font-semibold '>Lorem ipsum dolor, sit amet consectetur .</p>
      <p className=' text-xl font-semibold'>adipisicing elit. Vero, veritatis</p>
        </div>
             <div className='flex flex-row md:flex md:flex-row md:gap-5   pt-15  md:ml-0'>
           <img src="./pexels-danxavier-908602.jpg "className='hidden rounded-b-2xl  h-9 w-13 ' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='hidden rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
        <p className='md:pl-5 text-xl font-bold pr-5'>500+ Reviews</p>
      
           <Card className='md:w-120 w-90 border border-gray-500 bg-white md:h-60 md:ml-19  md:-mt-50 rounded-xl flex flex-row mt-50 -ml-90  mb-3'>
                           <div className='flex flex-row gap-5'>
                           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13 mt-5 ml-3 ' alt="" />
                            <h2 className='mt-4 text-md font-bold '>ronnie joy</h2>
                      
                        <p className='mt-4   '> ⭐ ⭐ ⭐ ⭐  </p>
                      </div>
                        <div className='flex'>
                        <p className='text-gray-500  font-medium px-2 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dignissimos laudantium voluptates quasi, accusamus, aliquam temporibus facilis at repellendus quisquam eum nam dist </p>
                         </div>
           </Card>
        </div>
     
     </div>
   
    </section>
  )
}

export default Testimonial
