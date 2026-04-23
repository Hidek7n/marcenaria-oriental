import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.avif";
import kitchen3 from "../assets/kitchen3.jpg";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 md:py-24 bg-gradient-to-b from-[#fcfcfa] to-[#f0ece6]"
    >
      <div className="bg-[#d6b36a] rounded-4xl border-2 border-[#3b2720] text-center mt-8 p-4 max-w-2xl mx-auto">
        <h1 className="text-[#3b2720] text-5xl font-extrabold text-center font-playfair">
          Projetos
        </h1>
      </div>

      {/* COZINHAS */}
      <section className="space-y-10">
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-[#3b2720] font-playfair">
            Cozinhas
          </h2>
          <div className="w-24 h-[3.5px] bg-[#d6b36a] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
          {/* Card exemplo */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={kitchen1}
                alt="Cozinha Planejada Moderna"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Cozinha Planejada Moderna
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Madeira natural em destaque e design sofisticado.
              </p>
            </div>
          </article>

          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={kitchen2}
                alt="Cozinha Compacta Branca e Amadeirada"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Cozinha Compacta Branca e Amadeirada
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Móveis em laca branca e bancada de madeira, com coluna de fornos embutidos e gavetões de alta qualidade, ideal para otimizar pequenos espaços.
              </p>
            </div>
          </article>

          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={kitchen3}
                alt="Cozinha Moderna de Alto Padrão"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Cozinha Moderna de Alto Padrão
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Elegância em tons de cinza chumbo e claro. Solução completa com armários espelhados e ampla ilha com pia, ideal para quem busca luxo e organização.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-[#3b2720] font-playfair">
            Dormitórios
          </h2>

          <div className="w-24 h-[3.5px] bg-[#d6b36a] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
          {/* Card 1 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bedroom1-0AA2M6R0.avif"
                alt="Quarto de Casal Moderno"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Quarto de Casal Moderno
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Composição moderna com painel ripado em destaque e criados-mudos
                flutuantes, integrando conforto e design.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bedroom2-CUSV0eLa.avif"
                alt="Suíte Master Elegante em Tons Neutros"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Suíte Master Elegante em Tons Neutros
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Guarda-roupa amplo com portas em acabamento matte de piso a teto,
                integrando-se perfeitamente ao painel ripado e à bancada de apoio.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bedroom3-ChO3JygT.avif"
                alt="Quarto de Casal com Guarda Roupa Aberto"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Quarto de Casal com Guarda Roupa Aberto
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Design focado em organização e leveza, com armário aberto em madeira
                clara de piso a teto, oferecendo prateleiras e gavetas.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-[#3b2720] font-playfair">
            Salas de Estar
          </h2>

          <div className="w-24 h-[3.5px] bg-[#d6b36a] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
          {/* Card 1 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/room1-DPx6p_Fr.avif"
                alt="Sala de Estar Contemporânea"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Sala de Estar Contemporânea
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Espaço moderno e acolhedor, com estante de madeira, elegante rack
                preto e mesa de centro.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/room2-B83DX--v.avif"
                alt="Sala de Estar Multiuso"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Sala de Estar Multiuso
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                O painel de TV flutuante com prateleiras abertas harmonizam com o
                ambiente.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/room3-C6qGLmnM.avif"
                alt="Sala de Estar Moderna"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Sala de Estar Moderna
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Painel ripado vertical texturizado com rack flutuante com acabamento
                em alto brilho.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-[#3b2720] font-playfair">
            Banheiros
          </h2>

          <div className="w-24 h-[3.5px] bg-[#d6b36a] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
          {/* Card 1 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bathroom1-mBdjxdlC.avif"
                alt="Banheiro em Tons de Branco e Cinza"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Banheiro em Tons de Branco e Cinza
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Armário de pia cinza e um armário de parede suspenso na mesma cor.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bathroom2-DRQ8ZOsu.avif"
                alt="Banheiro Minimalista"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Banheiro Minimalista
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Gabinete de banheiro em tom de madeira clara com puxadores escuros.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            data-aos="slide-right"
            className="bg-white border border-white/40 rounded-3xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/assets/bathroom3-C6xulZS5.avif"
                alt="Banheiro com Madeira Clara e Detalhes Pretos"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3b2720]">
                Banheiro com Madeira Clara e Detalhes Pretos
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Móvel planejado em madeira clara e armário alto de despensa, com
                puxadores pretos.
              </p>
            </div>
          </article>
        </div>
      </section>

    </section>
  );
}

export default Projects;