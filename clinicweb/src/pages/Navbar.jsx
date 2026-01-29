import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Menu,X} from 'lucide-react'

const navLinks = [
    {path:'/', label: 'Home'},
    {path:'/about',label:'About'},
    {path:'/features',label:'features'},
    {path:'testimonial',label:'Testimonial'},
    {path:'contact',label:'contact'}
];
const authButtons =[
    {
        path:'login',
        label:'Login',

    },
    {
        path:'signup',
        label:'Sign Up'
    }
]

const Navbar = () => {
  const [isOpen,setIsopen] = useState(false);

  
    return (
 <nav className='fixed top-0 left-0 right-0 h-60px bg-white flext items-center justify-between  px-8 z-100'>
 <h2 className='text-green-400 text-xl font-bold no-underline'>OXCARE</h2>
 
 <div className='hidden md-flex gap-8 items-center'>
    {navLinks.map((link)=>(
        <Link 
        key={link.path}
        to={link.path}
        className='text-black font-medium transition-colors hover:text-gray'>
        {link.label}
        </Link>
    ))}
    {authButtons.map((button)=>(
        <Link>
        </Link>
    ))}
    </div>
    </nav>
    )
}

export default Navbar
