import { motion as Motion } from "framer-motion";

export default function Highlights() {
  const items = [
    { name: "CHEESE BITES", img: "/images/highlight1.png", delay: 0 },
    { name: "NUEVOS MENUS", img: "/images/highlight2.png", delay: 0.1 },
    { name: "LIMITED EDITION", img: "/images/highlight3.png", delay: 0.2 },
  ];

  return (
    <section className="antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32">
        {/* Headline */}
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black tracking-tighter text-neutral-900 leading-[0.85] text-5xl sm:text-7xl lg:text-8xl text-left"
        >
          HAY <span className="text-emerald-500">COSAS</span> QUE
          <br /> NO DEBERÍAS PERDERTE.
        </Motion.h2>

        {/* Responsive Grid / Horizontal Row on Mobile */}
        <div className="mt-16 sm:mt-24 flex sm:grid sm:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {items.map((item) => (
            <Motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="group flex flex-col items-center text-center cursor-pointer min-w-[240px] sm:min-w-0 snap-center pb-4"
            >
              <div className="relative mb-8 aspect-square w-full flex items-center justify-center">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-emerald-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 blur-2xl" />

                <Motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={item.img}
                  alt={item.name}
                  className="w-auto h-40 sm:h-48 md:h-56 lg:h-64 object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-emerald-500 font-black text-xs tracking-[0.3em] mb-2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
                  HOT DEALS
                </span>
                <div className="text-lg sm:text-xl font-black tracking-tighter text-neutral-900 uppercase">
                  {item.name}
                </div>
                <div className="mt-2 w-8 h-1 bg-black group-hover:w-16 transition-all duration-300 rounded-full" />
              </div>
            </Motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-28 flex justify-center">
          <Motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/menu"
            className="
              inline-flex items-center gap-3 px-10 py-5
              bg-black text-[#eef0e6] font-black tracking-tighter rounded-full
              transition-all duration-300 shadow-xl shadow-black/10
              hover:shadow-emerald-500/20
            "
          >
            VER TODA LA CARTA <span className="text-xl">🔥</span>
          </Motion.a>
        </div>
      </div>
    </section>
  );
}
