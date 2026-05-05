import { useState } from 'react'
import logo from '../assets/logo-nav.jfif'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-nav border-b-2 border-b-nav z-50 overflow-x-hidden">

      <div className="flex items-center justify-between px-4 md:px-8 py-3">

        <img
          src={logo}
          alt="Logo"
          className="h-12 md:h-16 w-auto object-contain"
        />

        <ul className="hidden md:flex gap-8 font-bold text-xl">
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
              className="p-2 rounded-full text-nav hover:bg-nav hover:text-white hover:scale-110 transition"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://www.facebook.com/marcenariaoriental/?locale=pt_BR"
              target="_blank"
              className="p-2 rounded-full text-nav hover:bg-nav hover:text-white hover:scale-110 transition"
            >
              <FaFacebook size={30} />
            </a>

          </div>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-[2px] bg-nav transition ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-nav transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-nav transition ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>

        </div>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 px-4
          ${open ? 'max-h-[400px] pb-6' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col gap-6 font-medium pt-4">

          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>Sobre</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projetos</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contato</a></li>

          <li className="flex gap-4 mt-2">

            <a
              href="https://www.instagram.com/marcenariaoriental/"
              target="_blank"
              className="p-2 rounded-full text-nav hover:bg-nav hover:text-white transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/marcenariaoriental/?locale=pt_BR"
              target="_blank"
              className="p-2 rounded-full text-nav hover:bg-nav hover:text-white transition"
            >
              <FaFacebook size={22} />
            </a>

          </li>

        </ul>
      </div>

    </nav>
  )
}