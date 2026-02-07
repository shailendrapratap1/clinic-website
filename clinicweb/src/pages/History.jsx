
import React from 'react'

import { MoveRight } from 'lucide-react'

const History = () => {
  return (
    <section id='history' className='min-h-screen bg-white '>
      <div className='flex flex-col md:flex md:flex-row md:mx-20 md:pt-9 gap-5'>
         <div className='flex flex-col  md:w-100 md:h-90 mx-5 my-5'>
         <h2 className='text-4xl font-bold '>The Future </h2>
        <h1 className='text-4xl font-bold text-blue-500'>of Quality Health</h1>
          <p className='text-gray-500 font-medium pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem mollitia rerum ea vitae aperiam quis saepe quo possimus porro quae inventore vel, amet nostrum eos adipisci voluptatum minima! Temporibus hic doloremque illo nemo earum reiciendis itaque sint corrupti voluptas.</p>
          <h1 className='pt-5 pl-3 font-medium text-sky-500 cursor-pointer'>Learn more</h1>
         </div>
                <div className='flex flex-col  md:w-120 md:h-90  '>
<img src="./o.jpg" className='h-90 w-120 rounded-2xl' alt="" />
         </div>
      </div>
      <div className='bg-blue-500 md:h-70 ml-4 h-30 md:w-200 md:ml-15 rounded-2xl flex flex-col items-center  mt-30  '>
       <h2 className='md:pt-15 md:text-3xl pt-5 font-bold text-gray-100 md:pl-0'>Subscribe to our newsletter</h2>
        <div className=''>
         <form action="/search" className='md:mt-7  md:ml-10 w-50 md:w-170  md:h-13 h-10 rounded-b-4xl rounded-e-4xl rounded-4xl   bg-white md:mb-100 order-1 md:order-0 '
          >
               <div className='flex flex-row gap-5'>
          <input  type="email"  name="email" id='email' placeholder='enter your email' className='md:w-90 md:ml-5 w-30 rounded-2xl border border-gray-100'/>
          
           
        <MoveRight className='md:ml-48 mb-3 bg-blue-500 md:w-10 md:h-7 rounded-b-4xl rounded-e-4xl rounded-4xl text-white cursor-pointer mt-1 ml-4'/>
          
          </div>
            {/* <div className='flex flex-row gap-5'>
                <img src="./doct.svg" className='h-5  pl-4' alt="" />
          <input  type="text"  name="" placeholder='Doctor name' className='w-20'/>
          
          <input type="text" name="" placeholder='area' className='w-20'/>
        
          </div> */}
         </form>
          </div>
      </div>
    </section>
  )
}

export default History
