import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import './index.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Testimonial from './pages/Testimonial'
import History from './pages/History'
import Footer from './pages/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'

 const ScrollToSection = () =>{
  const location = useLocation();

  useEffect(()=>{
    const path = location.pathname;
    if(path === '/'){
      window.scrollTo({top:0,behavior:'smooth'})
    }else {
      const sectionId = path.replace('/','');
       const element = document.getElementById(sectionId);
       if(element){
        element.scrollIntoView({behavior:'smooth'})
       }
    }
  },[location]);
  return null;
 }


 const AllSections  =() =>(
  <>
  <Hero />
   <About />
    <Testimonial />
    <History />
    
  </>
 )
function App() {

  return (
  <> 
   <ScrollToSection />
         <div className="bg-sky-300 min-h-screen text-black">
<Navbar />
   <Routes>
    <Route path='/' element={<AllSections />}/>
        <Route path='/about' element={<AllSections />}/>
    <Route path='/testimonial' element={<AllSections />}/>
    <Route path='/history' element={<AllSections />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>

   </Routes>
   <Footer />
   </div>
  </>
  )
}

export default App
