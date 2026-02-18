import { motion as Motion } from "framer-motion";

export default function Delivery() {
    return (
        <div className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-10 left-[-5%] w-[40%] h-[40%] bg-white rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* TEXT CONTENT */}
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start text-left order-2 lg:order-1"
                    >
                        <span className="text-emerald-500 font-black tracking-[0.4em] text-sm uppercase mb-4">
                            DELIVERY TGB
                        </span>
                        <h1 className="text-6xl sm:text-8xl font-black text-[#132a25] leading-none tracking-tighter uppercase italic mb-8">
                            SI MOVERTE DE CASA
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">
                                NO ES UNA OPCIÓN
                            </span>
                        </h1>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-2xl sm:text-3xl font-black text-[#132a25] tracking-tight uppercase italic leading-tight">
                                Pídenos por <span className="text-emerald-500">Uber Eats</span>
                            </p>
                            <p className="text-lg text-neutral-500 font-medium">
                                Disfruta del sabor auténtico de The Good Burger allí donde estés. Rápido, fresco y directo a tu puerta.
                            </p>
                        </div>

                        <Motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 px-10 py-5 bg-black text-[#eef0e6] font-black tracking-tighter rounded-full shadow-2xl shadow-black/20 hover:bg-emerald-500 transition-all duration-300 flex items-center gap-3 group"
                        >
                            PIDE YA <span className="text-2xl group-hover:rotate-12 transition-transform">⚡</span>
                        </Motion.button>
                    </Motion.div>

                    {/* IMAGE PANEL */}
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        {/* Spinning decor behind image */}
                        <Motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[110%] h-[110%] border-[40px] border-emerald-500/5 rounded-full"
                        />

                        <img
                            src="/images/delivery.png"
                            alt="Delivery TGB"
                            className="relative z-10 w-full max-w-[600px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                        />
                    </Motion.div>

                </div>
            </div>
        </div>
    );
}
