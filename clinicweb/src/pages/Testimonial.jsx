import React from 'react'
import { Card } from '../components'

const Testimonial = () => {
  return (
    <section className='min-h-screen mx-auto left-0 right-0 bg-linear-to-r from-gray-200 to-purple-200'>
     <div className='grid grid-cols-1 grid-rows-1 pt-35 pl-20'>
        <div className='flex flex-col text-4xl font-bold'>
      <h2 className=' '>What <span className='text-blue-500'>our member's </span></h2>
      <h2>Saying about us</h2>
      <p className='pt-5 text-xl font-semibold '>Lorem ipsum dolor, sit amet consectetur .</p>
      <p className=' text-xl font-semibold'>adipisicing elit. Vero, veritatis</p>
        </div>
             <div className='flex flex-row md:flex md:flex-row   pt-15 '>
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl  h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
           <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
             <img src="./pexels-danxavier-908602.jpg "className='rounded-b-2xl h-9 w-13' alt="" />
        <p className='pl-5 text-xl font-bold'>500+ Reviews</p>
              <div className='w-120 border border-gray-500 h-60 ml-20  mb-200'>
        <Card>
          
        </Card>
        </div>
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
