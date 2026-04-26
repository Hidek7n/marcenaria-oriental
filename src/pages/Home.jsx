import bg from '../assets/home-bg.avif'

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4e342e] to-[#8d6e63] z-0"
    >

      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>


      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative z-10 text-center px-6 flex flex-col items-center max-w-3xl mt-10 mb-10 md:mt-20 md:mb-20">
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
          Marcenaria Oriental
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
          Projetos exclusivos, acabamentos impecáveis e madeira selecionada.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-relaxed">
          Criamos móveis com qualidade, elegância e durabilidade.
        </p>

        <a
          href="#contact"
          className="px-8 py-3 rounded-xl font-semibold text-[#3b2720]
                     bg-gradient-to-r from-[#d6b36a] to-[#f1de9c]
                     shadow-lg shadow-black/20
                     hover:shadow-xl hover:scale-[1.03] active:scale-95
                     transition-all"
        >
          Solicitar Orçamento
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d6b36a] to-[#f1de9c]"></div>
    </section>
  )
}