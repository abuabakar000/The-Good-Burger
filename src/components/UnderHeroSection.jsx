import { motion as Motion } from "framer-motion";

export default function NextImageSection() {
  return (
    <section className="w-full relative overflow-hidden h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <Motion.img
        initial={{ scale: 1.1, y: 0 }}
        whileInView={{ scale: 1, y: -20 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        src="/images/next-section-image.png"
        alt="Food table"
        className="
          w-full
          h-[120%]
          object-cover
        "
      />
      {/* Subtle bottom edge shadow to blend with following section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#eef0e6] to-transparent pointer-events-none" />
    </section>
  );
}
