import React from 'react'
 import {Facebook, Twitter} from 'lucide-react'
  import {Instagram} from 'lucide-react'
   import {Linkedin} from 'lucide-react'



const sections = [
   
   {
    title:'Home',
    links:['home']
   } ,
   {
        title:' About us',
        links:['about']
    },
    {
        title:'Testimonials',
        links:['testimonial']
    },
    {
        title:'History',
        links:['history']
    }
]

const Footer = () => {
  return (
    <footer className='min-h-screen mt-10  bg-blue-500'>
     <div className='md:flex md:flex-row flex flex-col md:px-20 md:py-15 px-2 md:gap-20'>
      <div className='flex flex-col  w-100 h-90 gap-8'>
        <h2 className='text-white font-medium text-4xl'>E-clinic</h2>
        <p className='text-gray-300 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A officia beatae amet vitae odit sapiente odio rerum quo hic enim.</p>
        <p className='text-gray-300 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, eveniet.</p>
         <div className='flex flex-row gap-2'>
       <Facebook className='text-white h-10 w-10 cursor-pointer'><link rel="stylesheet" href="" /></Facebook> 
              < Instagram className='text-white h-10 w-10 cursor-pointer'><link rel="stylesheet" href="" /></Instagram> 
              <Twitter className='text-white h-10 w-10 cursor-pointer'><link rel="stylesheet" href="" /></Twitter> 

</div>
      </div>

      <div className='flex flex-col'>
           <h2 className='text-white font-medium text-4xl'>Useful Links</h2>
         <div className=''>
           {
            sections.map((section)=>(
             <div key={section.title}  >
               <h4 className='md:mt-5 text-gray-200 font-medium cursor-pointer'>{section.title}</h4>
               <ul className='p-0 m-0 list-none hidden'>
             {section.links.map((link)=> (
              <li key={link} className='mb-2'>
                <a href="#" className='text-none'>
                  {link}
                </a>
              </li>
             ))}
             </ul>
             </div>
  
            ))
           }
         </div>
        
      </div>
       <div className='flex flex-col'>
          <h2 className='text-2xl text-white font-medium '>Address</h2>
          <img src="./i.png" alt="" className='rounded-6xl ' />
         </div>
     </div>
    </footer>
  )
}

export default Footer
