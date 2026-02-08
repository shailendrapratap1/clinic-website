import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="min-h-screen  bg-sky-500  ">
      <div className="md:flex md:flex-row flex flex-col md:px-20 md:py-15 px-2 md:gap-20 gap-5">
        <div className="flex flex-col gap-8">
          <h2 className="text-white font-medium text-4xl">E-clinic</h2>
          <p className="text-gray-300 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A officia beatae amet vitae odit sapiente odio rerum quo hic enim.
          </p>
          <p className="text-gray-300 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, eveniet.
          </p>

          <div className="flex gap-4">
            <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-white font-medium text-4xl">Useful Links</h2>
      <div>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className=" text-lg font-medium text-gray-300">Home</Link></li>
                        <li><Link to="/about" className="text-lg font-medium text-gray-300 ">About</Link></li>
                        <li><Link to="/testimonial" className="text-lg font-medium text-gray-300">Testimonial</Link></li>
                        <li><Link to="/history" className="text-lg font-medium text-gray-300 ">History</Link></li>
                    </ul>
                </div>

        </div>

        <div className="flex flex-col pt-5 h-82">
          <h2 className="text-2xl text-white font-medium">Address</h2>
           
          <img
            src="./i.png"
            alt="Clinic location"
            className="h-80 w-240 rounded-r-[40px] rounded-l-[70px] rounded-e-[50px] rounded-bl-[90px] pt-5"
          />
        </div>
      </div>

      <div className="border mt-3 md:mx-20 h-0 text-white" />

      <div>
        <h2 className="md:px-70 px-20 md:pb-4 text-gray-300">
          ©2026 all rights reserved
        </h2>
      </div>
    </footer>
  )
}

export default Footer
