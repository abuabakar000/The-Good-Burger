import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import salads from "../data/salads";

export default function Salads() {
  const [active, setActive] = useState(salads[0]);

  return (
    <section className="bg-[#eef0e6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: heading + thumbnails */}
          <div className="order-1">
            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl sm:text-8xl font-black leading-[0.8] text-[#132a25] tracking-tighter uppercase italic">
                <span className="block text-4xl sm:text-5xl font-black text-emerald-500 mb-2">
                  FRESH
                </span>
                SALADS &
                <br />
                BOWLS
              </h2>
            </Motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {salads.map((b) => {
                const selected = active.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setActive(b)}
                    className="group relative flex flex-col items-center focus:outline-none"
                  >
                    <Motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative p-2 rounded-2xl transition-all duration-300
                        ${selected ? "bg-white shadow-xl shadow-black/5 ring-2 ring-emerald-500" : "bg-transparent opacity-60 hover:opacity-100"}
                      `}
                    >
                      <img
                        src={b.thumb}
                        alt={b.name}
                        className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-md"
                        loading="lazy"
                        decoding="async"
                      />
                    </Motion.div>
                    <span
                      className={`mt-3 block text-center text-[10px] sm:text-xs font-black uppercase tracking-widest
                      ${selected ? "text-emerald-500" : "text-neutral-400 group-hover:text-neutral-900"}`}
                    >
                      {b.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: big image + text */}
          <div className="order-2">
            <div className="relative mx-auto w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              <Motion.div
                layoutId="productBgSalads"
                className="absolute w-[80%] h-[80%] bg-emerald-500/5 rounded-full blur-3xl"
              />

              <AnimatePresence mode="wait">
                <Motion.img
                  key={active.id}
                  src={active.img}
                  alt={active.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
            </div>

            <Motion.div
              key={`text-salad-${active.id}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-8 text-center lg:text-left"
            >
              <h3 className="text-3xl sm:text-4xl font-black text-[#23302c] tracking-tighter uppercase italic">
                {active.name}
              </h3>
              <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                {active.desc}
              </p>
            </Motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
