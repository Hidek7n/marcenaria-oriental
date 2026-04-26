import sideAbout from "../assets/side-about.avif";
import { FaStar, FaHandshake, FaRulerCombined } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 py-16 md:py-24 bg-gradient-to-b from-[#f7f5f0] to-[#efe9df] text-[#6f5636]"
    >
      <div className="bg-[#d6b36a] rounded-4xl border-2 border-[#3b2720] text-center mt-8 p-4 max-w-2xl mx-auto mb-20">
        <h1 className="text-5xl font-extrabold text-[#3b2720] font-playfair">
          Sobre Nós
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        <div className="flex-1 space-y-6">
          <h2 className="text-center md:text-left text-3xl font-semibold text-[#3b2720] font-playfair">
            Marcenaria Oriental
          </h2>

          <p className="text-center md:text-left text-gray-700 leading-relaxed">
            Somos uma marcenaria familiar com mais de{" "}
            <span className="font-semibold">40 anos de experiência</span>,
            atuando na criação de móveis planejados sob medida para ambientes
            residenciais e comerciais. Ao longo de nossa trajetória,
            construímos uma reputação sólida baseada em qualidade, precisão e
            compromisso com cada projeto.
            <br />
            <br />
            Trabalhamos com processos modernos de fabricação, materiais
            selecionados e soluções funcionais que valorizam o espaço, o
            conforto e a estética de cada ambiente. Cada móvel é planejado de
            forma personalizada, considerando as necessidades, o estilo e o dia
            a dia de cada cliente.
          </p>
        </div>

        <div data-aos="fade-in" className="flex-1">
          <img
            src={sideAbout}
            alt="Oficina de marcenaria artesanal"
            loading="lazy"
            className="rounded-2xl shadow-xl border border-[#d8cbbf] hover:scale-[1.02] transition-all"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div
          data-aos="fade-up"
          className="bg-white/80 border border-[#e0d4c6] rounded-2xl p-8 text-center shadow-lg space-y-3"
        >
          <FaStar className="text-4xl mx-auto text-[#d6b36a]" />

          <h3 className="text-xl font-semibold text-[#3b2720] mb-2">
            Qualidade
          </h3>

          <p className="text-gray-700 text-sm">
            Utilizamos apenas materiais selecionados, garantindo durabilidade e
            alto padrão de acabamento.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="bg-white/80 border border-[#e0d4c6] rounded-2xl p-8 text-center shadow-lg space-y-3"
        >
          <FaRulerCombined className="text-4xl mx-auto text-[#d6b36a]" />

          <h3 className="text-xl font-semibold text-[#3b2720] mb-2">
            Precisão
          </h3>

          <p className="text-gray-700 text-sm">
            Fabricação sob medida, medições milimétricas e encaixes perfeitos.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white/80 border border-[#e0d4c6] rounded-2xl p-8 text-center shadow-lg space-y-3"
        >
          <FaHandshake className="text-4xl mx-auto text-[#d6b36a]" />

          <h3 className="text-xl font-semibold text-[#3b2720] mb-2">
            Confiança
          </h3>

          <p className="text-gray-700 text-sm">
            Compromisso com prazos, respeito ao cliente e transparência em cada
            etapa do processo.
          </p>
        </div>
      </div>
    </section>
  );
}
