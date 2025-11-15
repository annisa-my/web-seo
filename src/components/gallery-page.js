import React from "react"
import Fade from "react-reveal/Fade"

import LogoGapura from "../images/logo-gapura.png"
import BackGroud from "../images/holographic-background.webp"

const Gallery = () => {
  const galleryImages = [
    { title: "Kegiatan Siswa", img: BackGroud },
    { title: "Fasilitas Sekolah", img: BackGroud },
    { title: "Ekstrakurikuler", img: BackGroud },
    { title: "Prestasi Siswa", img: BackGroud },
    { title: "Lingkungan Sekolah", img: BackGroud },
    { title: "Praktik Kejuruan", img: BackGroud },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      {/* HERO SECTION */}
      <Fade duration={2200}>
        <div className="flex flex-row items-center xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-10">
          {/* TEXT */}
          <div className="w-full sm:w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-2xl shadow-lg">
            <h1 className="text-white text-4xl font-semibold opacity-90">
              GALLERY
            </h1>
            <h1
              className="text-white font-bold mt-2
              xxs:text-3xl xs:text-4xl sm:text-5xl lg:text-6xl"
            >
              SMK GAPURA PERTIWI
            </h1>
            <p className="text-white opacity-80 mt-4 text-sm sm:text-base leading-relaxed">
              Dokumentasi kegiatan, fasilitas, dan lingkungan belajar 
              SMK Gapura Pertiwi yang mendukung pengembangan potensi 
              dan kreativitas siswa dalam berbagai bidang keahlian.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={LogoGapura}
              alt="Gallery Header"
              className="rounded-2xl max-h-96 object-cover"
            />
          </div>
        </div>
      </Fade>

      {/* GALLERY GRID */}
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryImages.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-xl 
                bg-gray-900 shadow-md md:h-80 ${i === 1 || i === 4 ? "md:col-span-2" : ""}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center 
                  transition duration-300 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <span className="relative ml-4 mb-3 text-white text-base font-medium drop-shadow-lg md:text-lg">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default Gallery
