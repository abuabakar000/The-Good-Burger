import { motion as Motion } from "framer-motion";

export default function QualitySection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden relative">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-black tracking-tighter leading-[0.85] text-neutral-900 text-5xl sm:text-7xl lg:text-8xl">
            LA <span className="text-emerald-500">CALIDAD</span>
            <br /> ES PARA TODOS.
          </h2>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 sm:mt-20 max-w-4xl"
        >
          <p className="text-xl sm:text-3xl lg:text-[36px] leading-[1.4] sm:leading-[1.4] text-neutral-500 font-medium tracking-tight">
            Para los amantes de las <strong className="text-neutral-900 font-black italic">buenas hamburguesas</strong>,
            para aquellos que no se conforman con lo común. Para los que{" "}
            <strong className="text-emerald-500 font-black">destacan</strong> en un mundo de imitaciones.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="h-px flex-1 bg-neutral-300" />
            <span className="text-neutral-900 font-black tracking-widest text-sm uppercase">Original TGB</span>
          </div>
          <p className="mt-8 text-xl sm:text-3xl lg:text-[36px] leading-[1.4] sm:leading-[1.4] text-neutral-900 font-black tracking-tight">
            THE GOOD BURGER ES PARA LOS ORIGINALES.
          </p>
          <p className="mt-6 text-neutral-500 text-lg sm:text-2xl font-medium italic">
            Para los de siempre, lo de siempre: La buena hamburguesa.
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
