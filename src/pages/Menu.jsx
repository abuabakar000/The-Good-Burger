import { motion as Motion } from "framer-motion";
import MenuCategoryNav from "../components/MenuCategoryNav";
import SingleBurgers from "../components/SingleBurgers";
import SpecialBurgers from "../components/SpecialBurgers";
import Sides from "../components/Sides";
import Salads from "../components/Salads";
import Bevrage from "../components/Bevrage";

export default function Menu() {
  return (
    <>

      {/* MENU HERO */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-emerald-500 font-black tracking-[0.4em] text-sm uppercase mb-4 block">
              DISFRUTA DE LA EXPERIENCIA
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-[#132a25] leading-[0.8] tracking-tighter uppercase italic">
              NUESTRA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#132a25] to-emerald-600">
                CARTA
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-neutral-500 font-medium max-w-2xl mx-auto italic">
              Ingredientes frescos, recetas originales y el sabor auténtico de TGB en cada bocado.
            </p>
          </Motion.div>
        </div>
      </section>

      <MenuCategoryNav />

      <main className="relative">
        {/* Burgers Section */}
        <SingleBurgers />

        {/* Divider with Brand Detail */}
        <div className="bg-[#eef0e6] py-12 flex justify-center overflow-hidden">
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            className="text-9xl font-black text-black select-none pointer-events-none whitespace-nowrap italic"
          >
            TGB TGB TGB TGB TGB
          </Motion.div>
        </div>

        <SpecialBurgers />

        <Sides />

        <Salads />

        <Bevrage />
      </main>
    </>
  );
}
