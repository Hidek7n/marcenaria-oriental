import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    success: false,
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = modal.open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal.open]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function closeModal() {
    setModal({
      open: false,
      success: false,
      message: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      setModal({
        open: true,
        success: data.success,
        message: data.message,
      });

      if (data.success) {
        setForm({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        });
      }
    } catch (error) {
      setModal({
        open: true,
        success: false,
        message: "Erro no servidor.",
      });
    }

    setLoading(false);
  }

  return (
    <>
      <section
        id="contact"
        className="flex flex-col py-16 bg-gradient-to-r from-[#4e342e] to-[#8d6e63]"
      >
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {/* FORM */}
          <div className="flex-1 px-4 py-8 md:py-10">
            <div className="max-w-xl md:max-w-2xl mx-auto p-4 md:p-8">
              <h2 className="text-[#f1de9c] text-sm sm:text-base md:text-lg font-semibold font-playfair">
                — Fale Conosco
              </h2>

              <h2 className="text-[#f1de9c] text-xl sm:text-2xl md:text-3xl font-semibold font-playfair">
                Madeira Sob Medida,
              </h2>

              <h2 className="text-[#f1de9c] text-xl sm:text-2xl md:text-3xl font-semibold font-playfair">
                Atendimento Sob Medida.
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-6"
              >
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base md:text-lg bg-black/20 p-3 rounded focus:outline-none text-white placeholder:text-white/70"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base md:text-lg bg-black/20 p-3 rounded focus:outline-none text-white placeholder:text-white/70"
                />

                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base md:text-lg bg-black/20 p-3 rounded focus:outline-none text-white placeholder:text-white/70"
                />

                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base md:text-lg bg-black/20 p-3 rounded focus:outline-none text-white placeholder:text-white/70"
                />

                <textarea
                  rows="6"
                  name="mensagem"
                  placeholder="Mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base md:text-lg bg-black/20 p-3 rounded focus:outline-none resize-none text-white placeholder:text-white/70"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="text-base sm:text-lg md:text-2xl py-3 bg-gradient-to-r from-[#d6b36a] to-[#f1de9c] text-[#3b2720] hover:from-[#bb9649] hover:to-[#e9cf87] hover:text-white shadow-md rounded font-extrabold transition disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 px-4 py-8 md:py-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6">
              <div className="flex gap-3 sm:gap-4 items-start p-4 mt-3 bg-white/10 rounded-xl shadow-md">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#d6b36a] to-[#f1de9c] text-[#3b2720] shadow">
                  <FaPhoneAlt className="text-sm sm:text-lg md:text-xl" />
                </div>

                <div>
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    Telefone
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-white/90">
                    +55 (11) 99635-2392
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start p-4 mt-3 bg-white/10 rounded-xl shadow-md">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#d6b36a] to-[#f1de9c] text-[#3b2720] shadow">
                  <FaEnvelope className="text-sm sm:text-lg md:text-xl" />
                </div>

                <div>
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    Email
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-white/90 break-all">
                    marcenariaoriental1998@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start p-4 mt-3 bg-white/10 rounded-xl shadow-md">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#d6b36a] to-[#f1de9c] text-[#3b2720] shadow">
                  <FaMapMarkerAlt className="text-sm sm:text-lg md:text-xl" />
                </div>

                <div>
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    Endereço
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-white/90">
                    Rua Tupinambás, 792 - Vila Conceição, Diadema - SP
                  </p>
                </div>
              </div>

              <div className="mt-6 w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <iframe
                  title="Localização"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.10642653841!2d-46.613729!3d-23.6963782!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce445e26ced049%3A0x2eaa44f2c792bd65!2sR.%20Tupinamb%C3%A1s%2C%20792%20-%20Vila%20Concei%C3%A7%C3%A3o%2C%20Diadema%20-%20SP%2C%2009991-090!5e0!3m2!1spt-BR!2sbr!4v1700000000000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        modal.open && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>

              <h2
                className={`text-2xl font-bold mb-4 ${modal.success ? "text-green-600" : "text-red-600"
                  }`}
              >
                {modal.success ? "Sucesso!" : "Erro!"}
              </h2>

              <p className="text-gray-700 mb-6">{modal.message}</p>

              <button
                onClick={closeModal}
                className={`px-6 py-3 rounded-lg font-bold text-white ${modal.success
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                Fechar
              </button>
            </div>
          </div>
        )
      }
    </>
  );
}