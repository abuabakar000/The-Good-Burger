import { motion as Motion } from "framer-motion";
import { Utensils, Zap, Salad, Coffee } from "lucide-react";

export default function MenuCategoryNav() {
    const categories = [
        { name: "Burgers", icon: Utensils, id: "burgers" },
        { name: "Especiales", icon: Zap, id: "special-burgers" },
        { name: "Sides", icon: Salad, id: "sides" },
        { name: "Bebidas", icon: Coffee, id: "drinks" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140; // Adjust for sticky navbar + this category nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="sticky top-[72px] md:top-[88px] z-40 bg-[#eef0e6]/90 backdrop-blur-md border-b border-black/5 py-4">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth px-2 sm:px-0">
                    {categories.map((cat) => (
                        <Motion.button
                            key={cat.id}
                            onClick={() => scrollToSection(cat.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white text-neutral-400 font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-sm border border-black/5 hover:text-black hover:border-black/10 group whitespace-nowrap"
                        >
                            <cat.icon className="w-4 h-4 group-hover:text-emerald-500 transition-colors" />
                            {cat.name}
                        </Motion.button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
