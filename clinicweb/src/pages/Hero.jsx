import React from 'react'

const Hero = () => {
  return (
 <section className='min-h-screen bg-linear-to-r from-sky-100 '>
    <div className='flex flex-1 flex-col md:pt-20 pt-40 pl-15 '>
      <h2 className='text-black text-4xl font-bold md:text-5xl md:pr-40'>Find & search your </h2>
      <span className='text-blue-500  font-bold md:text-5xl text-3xl'>favourite <span className='text-black  '>Doctor</span> </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem?</p>
    </div>
      
        {/* <button className='mt-10 ml-38 h-10 w-20 text-xl font-semibold rounded-xl hover:bg-white hover:border hover:border-sky-400 bg-sky-500'>Explore</button> */}
<div className='md:flex md:flex-row flex flex-col'>


          <form action="/search" className='md:mt-40  md:ml-10  w-100 h-10 rounded-2xl mt-5 ml-4 bg-white md:mb-100'
          >
            <div className='flex flex-row '>
                <img src="./doct.svg" className='h-5  pl-4' alt="" />
          <input  type="text"  name="" placeholder='Doctor name' className=''/>
          
          <input type="text" name="" placeholder='area' className=''/>
          </div>

          </form>
                             <img src="./d.png" alt=""  className='ml-6 h-80 w-100 '/>

      </div>

      {/* <button className=" bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer ml-40 mt-10">
explore
</button> */}
 </section>
  )
}

export default Hero
