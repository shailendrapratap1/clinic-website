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

    
}
]

const About = () => {
  return (
 <section className='min-h-screen min-w-screen bg-sky-200'>
   <div>
   <div className='flex flex-col gap-3 md:flex '>
{
    about.map((about,index)=> (
        <Card
        className='w-100 ml-1 rounded-xl bg-green-400 h-40' key={index}
            imgclass='h-4'
imageClass='h-4 w-15 rounded-xl mt-8 '
        titleClass=' text-xl font-serif text-lime-300'
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
