import { useState } from 'react'
import logo from '../assets/logo-nav.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-amber-950 px-8 py-4 z-50 border-b-amber-950 border-b-2">

      <div className="flex items-center justify-between">

        <img src={logo} alt="Logo" className="w-34" />

        <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2 font-bold text-xl">
          
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">Sobre</a></li>
          <li><a href="#projects" className="nav-link">Projetos</a></li>
          <li><a href="#contact" className="nav-link">Contato</a></li>

        </ul>

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://www.instagram.com/marcenariaoriental/"
              target="_blank"
              className="p-2 rounded-full text-amber-950 hover:bg-amber-950 hover:text-white hover:scale-110"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://www.facebook.com/marcenariaoriental/?locale=pt_BR"
              target="_blank"
              className="p-2 rounded-full text-amber-950 hover:bg-amber-950 hover:text-white hover:scale-110"
            >
              <FaFacebook size={32} />
            </a>

          </div>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-[2px] bg-amber-950 transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            ></span>

            <span
              className={`block w-6 h-[2px] bg-amber-950 transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            ></span>

            <span
              className={`block w-6 h-[2px] bg-amber-950 transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="flex flex-col gap-6 mt-6 md:hidden font-medium">

          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">Sobre</a></li>
          <li><a href="#projects" className="nav-link">Projetos</a></li>
          <li><a href="#contact" className="nav-link">Contato</a></li>

          <li className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/marcenariaoriental/"
              target="_blank"
              className="p-2 rounded-full text-amber-950 hover:bg-amber-950 hover:text-white transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/marcenariaoriental/?locale=pt_BR"
              target="_blank"
              className="p-2 rounded-full text-amber-950 hover:bg-amber-950 hover:text-white transition"
            >
              <FaFacebook size={22} />
            </a>
          </li>

        </ul>
      )}
      
    </nav>
  )
}