import { motion as Motion } from "framer-motion";

export default function FooterSubscribe() {
  return (
    <footer className="bg-[#eef0e6] text-neutral-900 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        {/* Top: Heading + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + legal copy */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="font-black leading-[0.85] tracking-tighter
                           text-6xl sm:text-7xl lg:text-8xl"
            >
              Únete al <span className="text-emerald-500">club</span>
              <br /> TGB
              <br />
              <span className="text-3xl sm:text-5xl lg:text-6xl text-neutral-400">
                ¿A QUÉ ESPERAS?
              </span>
            </h3>

            <div className="mt-12 text-xs sm:text-sm text-neutral-500 font-medium leading-6 sm:leading-7 max-w-md">
              <p>
                Le informamos que los datos que nos comunique a través del
                presente formulario serán tratados por [THE GOOD BURGER COMPANY
                S.L.U.] (“TGB”) para gestionar su solicitud de información.
              </p>
              <p className="mt-4 font-bold text-neutral-800">
                Consulta nuestra{" "}
                <a href="/privacidad" className="underline hover:text-emerald-500 transition-colors">
                  política de privacidad
                </a>{" "}
                para más detalles.
              </p>
            </div>
          </Motion.div>

          {/* Right: form */}
          <Motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 bg-white/50 p-8 sm:p-10 rounded-[40px] shadow-sm border border-black/5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-black uppercase tracking-widest text-neutral-400 mb-2">
                  Tu nombre
                </span>
                <input
                  type="text"
                  name="name"
                  className="w-full border-b-2 border-neutral-300 bg-transparent focus:outline-none
                             focus:border-black py-2 text-xl font-bold transition-colors"
                  placeholder="Ej. Juan"
                  required
                />
              </label>

              <label className="block">
                <span className="block text-sm font-black uppercase tracking-widest text-neutral-400 mb-2">
                  Tu email
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 border-neutral-300 bg-transparent focus:outline-none
                             focus:border-black py-2 text-xl font-bold transition-colors"
                  placeholder="hola@tgb.com"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-800 font-medium">
              <label className="inline-flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="h-5 w-5 rounded border-neutral-300 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="group-hover:text-black transition-colors">
                  Acepto recibir promociones y descuentos
                </span>
              </label>

              <label className="inline-flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="h-5 w-5 rounded border-neutral-300 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="group-hover:text-black transition-colors">
                  He leído y acepto la Política de Privacidad
                </span>
              </label>
            </div>

            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="
                w-full sm:w-fit px-12 py-5 bg-black text-[#eef0e6]
                font-black tracking-tighter rounded-full
                transition-all duration-300 shadow-xl shadow-black/10
                hover:bg-emerald-500
              "
            >
              SUSCRÍBETE <span className="ml-1 text-xl">🚀</span>
            </Motion.button>
          </Motion.form>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <img src="/images/tgb-logo.png" alt="TGB" className="h-7 opacity-30 grayscale" />
          <p className="text-center md:text-left text-xs sm:text-sm text-neutral-400 font-bold tracking-tight">
            ©2025 THE GOOD BURGER COMPANY, S.L.U | AVDA. DE EUROPA, 19, MADRID
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Twitter/X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
