import React from 'react'
import { Card } from '../components'
import { Star } from 'lucide-react'

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
             <div className='flex flex-row md:flex md:flex-row   pt-15  md:ml-0'>
           <img src="./pexels-danxavier-908602.jpg "className='hidden rounded-b-2xl  h-9 w-13 ' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='hidden rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
        <p className='md:pl-5 text-xl font-bold pr-5'>500+ Reviews</p>
       
           <Card className='md:w-120 w-80 border border-gray-500 bg-white md:h-60 md:ml-19  md:-mt-50 rounded-xl flex flex-row mt-50 -ml-90  mb-3'>
                           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13 mt-5 ml-3 ' alt="" />
                            <h2 className='ml-20 -mt-9 text-md font-bold '>john doe</h2>
                        <p className='ml-40 md:ml-50 md:mb-6'> ⭐ ⭐ ⭐  </p>
                        <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus tempore dolore nobis praesentium eveniet voluptatem tempora totam eum sequi?</p>
                         
           </Card>
                    

          
        </div>
     
     </div>
       {/* <div className='flex flex-row md:flex md:flex-row  ml-20 pt-15 '>
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl  h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
        <p className='pl-5 text-xl font-bold'>500+ Reviews</p>

        </div> */}
    </section>
  )
}

export default Testimonial
