import { motion as Motion } from "framer-motion";

export default function TripleVideoSection() {
  const videos = [
    { src: "/videos/vid1.mp4", id: 1 },
    { src: "/videos/vid2.mp4", id: 2 },
    { src: "/videos/vid3.mp4", id: 3 },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Responsive Grid / Horizontal Row on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-4">
          {videos.map((vid, idx) => (
            <Motion.div
              key={vid.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="min-w-[70vw] sm:min-w-0 aspect-[9/16] bg-black/10 overflow-hidden rounded-3xl shadow-2xl group relative snap-center"
            >
              <video
                src={vid.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay decor */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-[#eef0e6] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-black text-xs tracking-widest uppercase">@thegoodburger</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
