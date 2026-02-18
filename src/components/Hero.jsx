import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#eef0e6] flex items-center py-12 sm:py-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-[-5%] w-[40%] h-[40%] bg-lime-100/50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT PANEL */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg tracking-[0.4em] uppercase text-emerald-600 font-bold mb-4"
            >
              LA MÍTICA
            </Motion.p>
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="leading-[0.85] font-black text-neutral-900 text-[52px] sm:text-8xl md:text-9xl lg:text-[120px] tracking-tighter"
            >
              BUENA
              <br />
              <span className="text-emerald-500">BURGER.</span>
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 text-neutral-600 text-base sm:text-xl max-w-md leading-relaxed font-medium"
            >
              Buen rollo, buenas personas y las auténticas burgers con pan brioche. Lo de siempre, como nunca.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10 flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 w-full"
            >
              <button className="flex-1 sm:flex-none px-6 sm:px-8 py-4 bg-black text-[#eef0e6] text-sm sm:text-base font-black rounded-full hover:scale-105 transition-transform shadow-lg shadow-black/10 whitespace-nowrap">
                PEDIR AHORA
              </button>
              <button className="flex-1 sm:flex-none px-6 sm:px-8 py-4 border-2 border-black text-black text-sm sm:text-base font-black rounded-full hover:bg-black hover:text-[#eef0e6] transition-all whitespace-nowrap">
                VER CARTA
              </button>
            </Motion.div>
          </Motion.div>

          {/* BURGER IMAGE */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >


            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none aspect-square lg:aspect-auto flex items-center justify-center">
              {/* Spinning background element */}
              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-dashed border-emerald-500/20 rounded-full scale-110 lg:scale-125"
              />

              <picture className="relative z-10 w-[120%] lg:w-[130%] max-w-none">
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet="/images/burger-hero-md.png"
                />
                <Motion.img
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="/images/burger-hero.png"
                  alt="Burger"
                  className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                />
              </picture>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
