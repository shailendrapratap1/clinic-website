import React from 'react'
import { Card } from '../components'
import {Check} from 'lucide-react'

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
 <section id='about' className='min-h-screen left-0 right-0 bg-linear-to-r from-sky-100 to-sky-300'>
   <div className=' '>
    <div className='pt-34 '>
    <h2 className='text-gray-900 font-bold  text-3xl mb-10 ml-3 '>Our Consulting Specialists</h2>
     </div>
   <div className='flex flex-col gap-3 md:flex md:flex-row '>

{
    about.map((about,index)=> (
        <Card
        className=' ml-5 md:w-80 md:h-60 rounded-xl bg-white text-gray-400 font-serif text-[18px] h-43 px-3 border border-gray-500 hover:bg-blue-400 ' key={index}
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
   <div className='flex flex-col md:flex md:flex-row pt-30  gap-5'>
        <img src="./pexels-davegarcia-33916255.jpg" alt="" className='md:w-100 rounded-2xl ml-10 mt-5'/>
        <div className='ml-10'>
        <h2 className='ml-20 text-xl font-bold'>Why choose us</h2>
        <ul className='flex flex-col gap-4 font-serif'>
            <li  className=''><Check  className=' inline-flex  text-blue-500 text-sm font-serif'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li><Check  className=' inline-flex text-blue-500'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li><Check  className=' inline-flex  text-blue-500 text-sm font-serif'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li><Check  className=' inline-flex  text-blue-500 text-sm font-serif'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li><Check  className=' inline-flex  text-blue-500 text-sm font-serif'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
             <li className='ml-5 mt-5 text-blue-500 underline cursor-pointer'>Learn more</li>
        </ul>
        
        </div>
   </div>
   </div>
 </section>
  )
}

export default About
