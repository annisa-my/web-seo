import React from "react"
import Fade from "react-reveal/Fade"
import Image3 from "../../images/sekolah smk gapura pertiwi.jpg"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10 bg-blue-50 p-8 rounded-2xl">
        
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3} />
        </div>

        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            Profil Sekolah
          </h1>

          <h2 className="text-black text-base font-normal leading-relaxed xxs:text-sm xs:text-sm sm:text-base lg:text-lg">
            SMK Gapura Pertiwi hadir sebagai lembaga pendidikan kejuruan yang berkomitmen mencetak generasi muda yang terampil,
            disiplinn, dan siap bersaing di dunia kerja. Melalui kurikulum berbasis kompetensi dan pembelajaran yang inovatif,
            sekolah ini terus berupaya menjadi wadah pengembangan potensi dan kreativitas peserta didik.
          </h2>
        </div>

      </div>
    </Fade>
  )
}

export default AboutHeader
