import React from 'react'

const Hero = () => {
  return (
 <section className=' min-h-screen md:min-h-screen-1/2 left-0 right-0  bg-linear-to-r from-sky-100 to-sky-300 '>
    <div className=''>
    <div className='flex flex-1 flex-col md:pt-20 pt-40 pl-15 '>
      <h2 className='text-black text-4xl font-bold md:text-5xl md:pr-40'>Find & search your </h2>
      <span className='text-blue-500  font-bold md:text-5xl text-3xl'>favourite <span className='text-black  '>Doctor</span> </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem?</p>
    </div>
      
        {/* <button className='mt-10 ml-38 h-10 w-20 text-xl font-semibold rounded-xl hover:bg-white hover:border hover:border-sky-400 bg-sky-500'>Explore</button> */}
<div className='md:flex md:flex-row flex flex-col pl-9 md:pl-0'>


          <form action="/search" className='md:mt-30  md:ml-10 w-85 md:w-100 h-10 rounded-2xl mt-6 ml- bg-white md:mb-100 order-1 md:order-0 '
          >
            <div className='flex flex-row gap-5 px-2'>
                <img src="./doct.svg" className='h-5  pl-4' alt="" />
          <input  type="text"  name="" placeholder='Doctor name' className='w-20'/>
          <img src="./map_10843254.png" className='h-5  pl-4' alt="" />
          <input type="text" name="" placeholder='area' className='w-20'/>
        
          </div>
   <div className=' bg-blue-500 flex flex-row md:flex md:flex-row  md:mt-25  h-20 md:w-190 md:gap-15 mt-20 sm:mt-3 rounded-xl w-90'>
            <div className='flex flex-col'>
             <h2 className='text-white text-5xl font-bold '>24/7|</h2>
             <h3 className='text-gray-200'>customer help</h3>
             </div>
             <div className='flex flex-col'>
                          <h2 className='text-white text-5xl font-bold '>100+|</h2>
                          <h2 className='text-gray-300'>Doctors</h2>
       </div>
         <div>
                          <h2 className='text-white text-5xl font-bold '>1M+</h2>
                          <h2 className='text-gray-100'>Active patients</h2>
       </div>
         </div>
          </form>
          <div className=' h-90 px-5'>
              <img src="./d.png" alt=""  className=' ml-6 md:ml-15 md:pb-4 h-85 w-140 '/>
          </div>
                         
           
   </div>
 
       </div>

      {/* <button className=" bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer ml-40 mt-10">
explore
</button> */}
 </section>
  )
}

export default Hero
