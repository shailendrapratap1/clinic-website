import React from 'react'

const History = () => {
  return (
    <section className='min-h-screen bg-white mt-10'>
      <div className='flex flex-col md:flex md:flex-row md:mx-20 md:my-20 gap-5'>
         <div className='flex flex-col  md:w-100 md:h-90 mx-5 my-5'>
         <h2 className='text-4xl font-bold '>The Future </h2>
        <h1 className='text-4xl font-bold text-blue-500'>of Quality Health</h1>
          <p className='text-gray-500 font-medium pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem mollitia rerum ea vitae aperiam quis saepe quo possimus porro quae inventore vel, amet nostrum eos adipisci voluptatum minima! Temporibus hic doloremque illo nemo earum reiciendis itaque sint corrupti voluptas.</p>
          <h1 className='pt-5 pl-3 font-medium text-sky-500 cursor-pointer'>Learn more</h1>
         </div>
                <div className='flex flex-col  md:w-120 md:h-90 h-70 w-75'>
<img src="./o.jpg" className='h-90 w-120 rounded-2xl' alt="" />
         </div>
      </div>
    </section>
  )
}

export default History
