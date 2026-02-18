import { motion as Motion } from "framer-motion";

export default function Deal() {
  return (
    <section className="bg-[#eef0e6] overflow-hidden">
      {/* Dynamic Typography Hero */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Background Animation Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(6)].map((_, i) => (
            <Motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-white/5 font-black text-9xl pointer-events-none select-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              2X1
            </Motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-emerald-500 font-black tracking-[0.2em] text-sm sm:text-lg mb-6 uppercase">
              LA MEJOR PROMO DE LA SEMANA
            </h1>
            <div className="flex flex-col items-center">
              <Motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-white text-[120px] sm:text-[180px] lg:text-[220px] leading-[0.7] font-black italic tracking-tighter"
              >
                2X1
              </Motion.span>
              <div className="mt-4 sm:mt-8 h-2 sm:h-3 w-32 sm:w-48 bg-emerald-500 rounded-full" />
            </div>
          </Motion.div>
        </div>

        {/* Floating gradient accent */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
      </Motion.div>

      <section className="bg-[#eef0e6] py-16 sm:py-24 relative">
        {/* Subtle decorative accent */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl -translate-x-12 -translate-y-12" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-500 font-black tracking-[0.4em] text-xs sm:text-sm uppercase mb-4 block">
              PROMOCIÓN EXCLUSIVA
            </span>
            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black text-[#0B231F] leading-[0.8] tracking-tighter uppercase italic">
              JUEVES
              <br /> DE <span className="text-emerald-500 underline decoration-black/10">2X1</span>
            </h2>

            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 space-y-4"
            >
              <p className="text-xl sm:text-2xl text-neutral-800 leading-tight font-black tracking-tight italic">
                ¿Te vas a comer solo una? No este jueves.
              </p>
              <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed font-medium max-w-xl mx-auto">
                En TGB, pides una burger y te regalamos otra.
                Sí, gratis. Solo en el local. Solo los jueves.
              </p>
            </Motion.div>

            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-12 py-5 bg-black text-[#eef0e6] font-black tracking-tighter rounded-full shadow-2xl shadow-black/20 hover:bg-emerald-500 transition-colors"
            >
              BUSCA TU LOCAL <span className="ml-2">📍</span>
            </Motion.button>
          </Motion.div>
        </div>
      </section>
    </section>
  );
}
