import { useState, useEffect } from "react";

import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.avif";
import kitchen3 from "../assets/kitchen3.jpg";
import bedroom1 from "../assets/bedroom1.avif";
import bedroom2 from "../assets/bedroom2.avif";
import bedroom3 from "../assets/bedroom3.avif";
import room1 from "../assets/room1.avif";
import room2 from "../assets/room2.avif";
import room3 from "../assets/room3.avif";
import bathroom1 from "../assets/bathroom1.avif";
import bathroom2 from "../assets/bathroom2.avif";
import bathroom3 from "../assets/bathroom3.avif";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const projects = [
    {
      category: "Cozinhas",
      items: [
        {
          title: "Cozinha Planejada Moderna",
          image: kitchen1,
          desc: "Madeira natural em destaque e design sofisticado.",
        },
        {
          title: "Cozinha Compacta Branca e Amadeirada",
          image: kitchen2,
          desc: "Móveis em laca branca e bancada de madeira, com coluna de fornos embutidos e gavetões de alta qualidade, ideal para otimizar pequenos espaços.",
        },
        {
          title: "Cozinha Moderna de Alto Padrão",
          image: kitchen3,
          desc: "Elegância em tons de cinza chumbo e claro. Solução completa com armários espelhados e ampla ilha com pia, ideal para quem busca luxo e organização.",
        },
      ],
    },
    {
      category: "Dormitórios",
      items: [
        {
          title: "Quarto de Casal Moderno",
          image: bedroom1,
          desc: "Composição moderna com painel ripado em destaque e criados-mudos flutuantes, integrando conforto e design.",
        },
        {
          title: "Suíte Master Elegante em Tons Neutros",
          image: bedroom2,
          desc: "Guarda-roupa amplo com portas em acabamento matte de piso a teto, integrando-se perfeitamente ao painel ripado e à bancada de apoio.",
        },
        {
          title: "Quarto de Casal com Guarda Roupa Aberto",
          image: bedroom3,
          desc: "Design focado em organização e leveza, com armário aberto em madeira clara de piso a teto, oferecendo prateleiras e gavetas.",
        },
      ],
    },
    {
      category: "Salas de Estar",
      items: [
        {
          title: "Sala de Estar Contemporânea",
          image: room1,
          desc: "Espaço moderno e acolhedor, com estante de madeira, elegante rack preto e mesa de centro.",
        },
        {
          title: "Sala de Estar Multiuso",
          image: room2,
          desc: "O painel de TV flutuante com prateleiras abertas harmonizam com o ambiente.",
        },
        {
          title: "Sala de Estar Moderna",
          image: room3,
          desc: "Painel ripado vertical texturizado com rack flutuante com acabamento em alto brilho.",
        },
      ],
    },
    {
      category: "Banheiros",
      items: [
        {
          title: "Banheiro em Tons de Branco e Cinza",
          image: bathroom1,
          desc: "Armário de pia cinza e um armário de parede suspenso na mesma cor.",
        },
        {
          title: "Banheiro Minimalista",
          image: bathroom2,
          desc: "Gabinete de banheiro em tom de madeira clara com puxadores escuros.",
        },
        {
          title: "Banheiro com Madeira Clara e Detalhes Pretos",
          image: bathroom3,
          desc: "Móvel planejado em madeira clara e armário alto de despensa, com puxadores pretos.",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-16 md:py-24 bg-gradient-to-b from-[#fcfcfa] to-[#f0ece6]"
    >
      <div className="bg-[#d6b36a] rounded-4xl border-2 border-[#3b2720] text-center mt-8 p-4 max-w-2xl mx-auto">
        <h1 className="text-[#3b2720] text-5xl font-extrabold font-playfair">
          Projetos
        </h1>
      </div>

      {projects.map((section, index) => (
        <section key={index} className="space-y-10">
          <div className="text-center mt-24">
            <h2 className="text-4xl font-bold text-[#3b2720] font-playfair">
              {section.category}
            </h2>

            <div className="w-24 h-[3.5px] bg-[#d6b36a] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
            {section.items.map((item, i) => (
              <article
                key={i}
                data-aos="slide-right"
                className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => setSelectedImage(item.image)}
                    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3b2720]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative inline-block">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white text-black border-black border-2 w-10 h-10 rounded-full text-2xl font-bold hover:scale-110 transition z-50 shadow-lg"
            >
              X
            </button>

            <img
              src={selectedImage}
              alt="Projeto ampliado"
              className="max-w-5xl w-full max-h-[90vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}