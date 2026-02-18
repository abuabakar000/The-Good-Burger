import { motion as Motion } from "framer-motion";

export default function Bevrage() {
  return (
    <section id="drinks" className="bg-[#eef0e6] py-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-white/30 skew-y-3 translate-y-20 h-40" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <span className="text-emerald-500 font-black tracking-[0.3em] text-xs uppercase">
              CALIDAD CERTIFICADA
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tighter text-[#132a25] uppercase italic">
              Nuestros Proveedores
            </h2>
          </div>

          <img
            src="/images/providers.png"
            alt="Nuestros proveedores oficiales"
            className="w-full h-auto object-contain drop-shadow-sm select-none"
          />
        </Motion.div>
      </div>
    </section>
  );
}
