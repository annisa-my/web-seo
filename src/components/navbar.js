import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo-gapura.png" // pastiin path logo bener ya

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav
      className="bg-gradient-to-r from-[#1E3A8A] to-[#6CA8F1] bg-size-400 animate-gradient-x shadow-md"
    >
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          {/* Kiri: Logo + Nama Sekolah */}
          <div className="w-full justify-between flex items-center">
            <a
              className="text-white flex-shrink-0 font-montserrat font-semibold flex items-center gap-2"
              href="/"
            >
              <img
                src={logo}
                alt="Logo SMK Gapura Pertiwi"
                className="h-10 w-auto drop-shadow-md"
              />
              <span className="font-semibold text-white tracking-wide">
                SMK Gapura Pertiwi
              </span>
            </a>

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                    {["Home", "About", "Gallery", "Blog", "Contact"].map((item) =>
                      item === "Home" ?  (
                        <Link
                        key={item}
                        to={`/`}
                        className="relative after:rounded after:bg-[#FFD700] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                      >
                        {item}
                      </Link>
                      ) : (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="relative after:rounded after:bg-[#FFD700] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                      >
                        {item}
                      </Link>
                      )
                    )}
                    <div className="items-center">
                      <a
                      href="tel:#"
                      className="transition-all duration-300 ease-in-out bg-transparent mt-5 py-2.5 px-4 text-base font-medium text-center text-white rounded-lg border border-[#FFD700] hover:text-[#1E3A8A] hover:bg-[#FFD700]"
                      >
                      Call Us Now
                      </a>
                    </div>
                    </div>
                  </div>
                  </div>

                  {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                fill="white"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {openMenu && (
        <div className="transition duration-700 ease-in-out md:hidden bg-[#1E3A8A] text-white">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {["Home", "About", "Gallery", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-white opacity-80 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
              >
                {item}
              </a>
            ))}
            <div className="items-center mt-4 py-3">
              <a
                href="tel:#"
                className="transition-all duration-300 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-[#FFD700] text-[#1E3A8A] hover:bg-transparent border border-[#FFD700] hover:text-white"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
