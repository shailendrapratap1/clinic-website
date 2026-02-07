import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const sections = [
  { title: 'Home',         links: ['/'] },
  { title: 'About',     links: ['/about'] },
  { title: 'Testimonial', links: ['/testimonial'] },
  { title: 'History',      links: ['/history'] },
]

const Footer = () => {
  return (
    <footer className="min-h-screen-1/2 md:mt-20 bg-blue-500 mt-3">
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
            {sections.map(section => (
              <div key={section.title}>
                <h4 className="md:mt-5 text-gray-200 font-medium cursor-pointer">
                  {section.title}
                </h4>
                <ul className="p-0 m-0 list-none">
                  {section.links.map(link => (
                    <li key={link} className="mb-2">
                      <a href={link} className="no-underline text-blue-500 hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-5">
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
