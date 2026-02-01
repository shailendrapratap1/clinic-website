import React from 'react'
import { Card } from '../components'
    

const about = [
{
    image:'co.svg',
    title:'Covid 19-test',
     description: "Dedicated spaces designed for collaboration, discussions, and group projects."

    
},
{
    image:'co.svg',
    title:'Covid 19-test',
     description: "Dedicated spaces designed for collaboration, discussions, and group projects."

    
},
{
    image:'co.svg',
    title:'Covid 19-test',
     description: "Dedicated spaces designed for collaboration, discussions, and group projects."

    
},
{
    image:'co.svg',
    title:'Covid 19-test',
     description: "Dedicated spaces designed for collaboration, discussions, and group projects."

    
}
]

const About = () => {
  return (
 <section className='min-h-screen mx-auto left-0 right-0 bg-linear-to-r from-sky-100 sm:mt-40'>
   <div>
    <h2 className='text-gray-900 font-bold  text-3xl mb-10 ml-3 '>Our Consulting Specialists</h2>
   <div className='flex flex-col gap-3 md:flex md:flex-row '>

{
    about.map((about,index)=> (
        <Card
        className='w-90 ml-5 md:w-80 md:h-60 rounded-xl bg-white text-gray-400 font-serif text-[18px] h-43 px-3 border border-gray-500 hover:bg-blue-400 ' key={index}
            imgclass='h-6 bg-blue-200 w-7 rounded-md md:mt-5 md:ml-7'
imageClass='h-5 w-15 rounded-xl mt-3 '
        titleClass=' text-xl font-semibold text-blue-300 '
        descClass='text-black'
        image={about.image }
        title={about.title}
        description={about.description} />

        
    ))
}
   </div>
   </div>
 </section>
  )
}

export default About
