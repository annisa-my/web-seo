import React from "react"
import Fade from "react-reveal/Fade"

import Hero from "../../images/logo-gapura.png" // ubah ke logo SMK lo ya bro

const Header = () => {
  return (
    <Fade duration={2200}>
      {/* Bagian Background */}
      <div
        className="relative max-w-full mx-auto py-16"
        style={{
          background: "linear-gradient(to right, #1E3A8A, #B0C4DE)", // biru tua ke biru muda
          color: "#fff",
        }}
      >
        <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
            
            {/* Bagian Teks */}
            <div className="text-center lg:text-left flex flex-col justify-center">
              <h1 className="text-white text-4xl font-semibold opacity-90 tracking-wide">
                SMK GAPURA PERTIWI
              </h1>
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FACC15] to-[#FFF3B0] text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
                Menyiapkan Lulusan Unggul, Siap Kerja dan Siap Berkarya
              </h2>

              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 opacity-90 leading-relaxed">
                Di SMK Gapura Pertiwi, kami berkomitmen mencetak siswa yang unggul, 
                terampil, dan berakhlak. Melalui pembelajaran berbasis teknologi dan praktik industri, 
                kami mempersiapkan generasi siap bersaing di dunia kerja dan wirausaha.
              </p>

              {/* Tombol */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="/contact"
                    className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-[#1E3A8A] text-white hover:text-[#1E3A8A] border border-white hover:bg-white md:text-lg md:px-10"
                  >
                    Hubungi Kami
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about"
                    className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:text-[#1E3A8A] bg-transparent hover:bg-white md:py-3 md:text-lg md:px-10"
                  >
                    Tentang Kami
                  </a>
                </div>
              </div>
            </div>

            {/* Gambar */}
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
              <img
                className="rounded-xl w-auto h-full object-cover flex justify-center shadow-xl"
                src={Hero}
                alt="SMK Gapura Pertiwi"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
